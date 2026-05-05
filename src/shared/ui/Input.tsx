import { Input as InputPrimitive } from '@base-ui/react/input'

import { cn } from '../lib'

export const Input = ({ className, ...props }: InputPrimitive.Props) => (
  <InputPrimitive
    type='text'
    data-slot='input'
    className={cn(
      `autofill:text-fill-white disabled:bg-gray/30 focus-visible:border-orange
      focus-visible:ring-orange/50 aria-invalid:border-red
      aria-invalid:ring-red/20 h-11.5 w-full min-w-0 rounded-xl border
      border-white/30 bg-transparent px-3.5 py-1 transition-colors outline-none
      placeholder:text-white/60 autofill:bg-clip-text focus-visible:ring-3
      disabled:pointer-events-none disabled:cursor-not-allowed
      aria-invalid:ring-3`,
      className
    )}
    {...props}
  />
)
