import type { PropsWithChildren } from 'react'

import Link from 'next/link'

import { Icon } from '@/shared/ui'

export const AuthFlowLayout = ({ children }: PropsWithChildren) => (
  <div className='flex h-dvh flex-col'>
    <div className='tablet:pt-8 container h-full pt-6'>
      <div
        className='tablet:mb-35 desktop:mb-37.5 mb-22.5 flex items-center gap-2'>
        <Link
          href='/'
          className='flex items-center gap-2'>
          <Icon
            name='logo'
            className='tablet:h-4.25 tablet:w-11 fill-orange h-3.25 w-9'
          />
          <p className='tablet:text-md text-base font-medium'>PowerPulse</p>
        </Link>
      </div>
      {children}
    </div>
  </div>
)
