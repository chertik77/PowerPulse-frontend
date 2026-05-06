import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { decodeToken } from '@/shared/lib'

export const proxy = async (req: NextRequest) => {
  const { pathname } = req.nextUrl

  const token = req.cookies.get('accessToken')?.value

  const payload = decodeToken(token)

  const isAuth = pathname.startsWith('/auth')
  const isApp = pathname.startsWith('/app')
  const isIntake = pathname.startsWith('/daily-intake')
  const isHome = pathname === '/'

  // Not authenticated
  if (!payload) {
    if (isApp || isIntake) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  }

  // Not completed intake
  if (!payload.isDailyIntakeFormCompleted) {
    if (!isIntake) {
      return NextResponse.redirect(new URL('/daily-intake', req.url))
    }

    return NextResponse.next()
  }

  // Fully authenticated
  if (isAuth || isIntake || isHome) {
    return NextResponse.redirect(new URL('/app', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/auth:path*', '/daily-intake', '/app:path*']
}
