'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'

import { MENU_DATA } from '../config/menu-data'

export const HeaderMenuData = ({ className }: { className?: string }) => {
  const pathname = usePathname()

  return (
    <ul className={cn('mr-8 ml-auto flex items-center gap-4', className)}>
      {MENU_DATA.map(item => (
        <li key={item.id}>
          <Button
            variant='outline'
            nativeButton={false}
            className='text-md! aria-[current="page"]:bg-orange px-6.75 py-2.5'
            render={
              <Link
                href={item.href}
                aria-current={item.href === pathname ? 'page' : undefined}
              />
            }>
            {item.title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
