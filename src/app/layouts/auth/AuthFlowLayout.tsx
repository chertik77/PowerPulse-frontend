import type { PropsWithChildren } from 'react'

import Link from 'next/link'

import { Logo } from '@/shared/ui'

export const AuthFlowLayout = ({ children }: PropsWithChildren) => (
  <div className='flex h-dvh flex-col'>
    <div className='tablet:pt-8 container h-full pt-6'>
      <div
        className='tablet:mb-35 desktop:mb-37.5 mb-22.5 flex items-center gap-2'>
        <Link
          href='/'
          className='flex items-center gap-2'>
          <Logo />
        </Link>
      </div>
      {children}
    </div>
  </div>
)
