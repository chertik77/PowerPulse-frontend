import type { PropsWithChildren } from 'react'

import Link from 'next/link'

import { Pages } from '@/config'

import { Icon } from './ui'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div className='welcome-layout h-dvh'>
    <div className='container h-full pt-6 tablet:pt-8'>
      <div className='mb-[90px] flex items-center gap-2 tablet:mb-[140px] desktop:mb-[150px]'>
        <Link
          href={Pages.Home}
          className='flex items-center gap-2'>
          <Icon
            name='logo'
            className='h-[13px] w-9 tablet:h-[17px] tablet:w-11'
          />
          <p className='text-base font-medium tablet:text-md'>PowerPulse</p>
        </Link>
      </div>
      {children}
    </div>
  </div>
)
