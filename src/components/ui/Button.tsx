import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={cn(
      `h-[42px] rounded-xl bg-orange text-md font-medium transition-colors
      disabled:cursor-not-allowed disabled:text-white/60 hocus:bg-coral
      tablet:h-[56px] tablet:text-xl`,
      className
    )}
    {...props}>
    {children}
  </button>
)
