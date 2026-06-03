import Link from 'next/link'

import { Icon, Logo } from '@/shared/ui'

import { HeaderBurgerMenu } from './HeaderBurgerMenu'
import { HeaderLogoutBtn } from './HeaderLogoutBtn'
import { HeaderMenuData } from './HeaderMenuData'
import { HeaderUserAvatar } from './HeaderUserAvatar'

export const Header = () => (
  <div
    className='tablet:py-5 container flex items-center justify-between border-b
      border-white/20 py-3'>
    <Link href='/app/diary'>
      <Logo />
    </Link>
    <HeaderMenuData
      className='max-desktop:hidden [&_a]:aria-[current="page"]:border-none'
    />
    <div className='tablet:gap-4 flex items-center gap-3.5'>
      <Link href='/app/settings'>
        <Icon
          name='settings'
          className='tablet:size-7 size-6 stroke-white/60'
        />
      </Link>
      <HeaderUserAvatar />
      <HeaderBurgerMenu />
      <HeaderLogoutBtn className='max-desktop:hidden [&_svg]:stroke-orange' />
    </div>
  </div>
)
