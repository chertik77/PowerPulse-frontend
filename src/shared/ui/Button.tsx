import type { VariantProps } from 'class-variance-authority'

import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva } from 'class-variance-authority'

import { cn } from '../lib'

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl bg-clip-padding text-md tablet:text-xl font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red aria-invalid:ring-3 aria-invalid:ring-red/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: 'bg-orange hocus:bg-coral disabled:text-white/60',
        secondary:
          'hocus:border-orange border border-white/30 disabled:text-white/60',
        ghost: 'bg-transparent'
      },
      size: {
        default: 'tablet:h-14 h-10.5 gap-2',
        icon: 'size-5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const Button = ({
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) => (
  <ButtonPrimitive
    data-slot='button'
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
)
