import type { PropsWithChildren } from 'react'

import { Icon } from './ui/Icon'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div className='welcome-layout relative h-dvh'>
    <div className='container h-full pt-6 tablet:pt-8'>
      <div className='mb-[90px] flex items-center gap-2 tablet:mb-[140px] desktop:mb-[150px]'>
        <Icon
          name='logo'
          className='h-[13px] w-9 tablet:h-[17px] tablet:w-11'
        />
        <p className='text-base font-medium tablet:text-md'>PowerPulse</p>
      </div>
      {children}
    </div>
  </div>
)
