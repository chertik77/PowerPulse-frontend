import type { Route } from 'next'

type MenuItem = {
  id: number
  title: string
  href: Route
}

export const MENU_DATA: MenuItem[] = [
  {
    id: 1,
    title: 'Diary',
    href: '/app/diary'
  },
  {
    id: 2,
    title: 'Products',
    href: '/app/products'
  },
  {
    id: 3,
    title: 'Exercises',
    href: '/app/exercises'
  }
]
