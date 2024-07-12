import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => (
  <button
    className={cn(
      'h-[42px] rounded-xl bg-orange text-md font-medium',
      className
    )}>
    {children}
  </button>
)
