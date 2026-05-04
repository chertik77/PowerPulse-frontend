import type { ComponentProps } from 'react'

import { cn } from '../lib'

export const Input = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type='text'
    className={cn(
      `autofill:text-fill-white enabled:focus-visible:border-orange
      disabled:bg-gray/30 h-11.5 w-full rounded-xl border border-white/30
      bg-transparent px-3.5 outline-none placeholder:text-white/60
      autofill:bg-clip-text disabled:cursor-not-allowed`,
      className
    )}
    {...props}
  />
)
