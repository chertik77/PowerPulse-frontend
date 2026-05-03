import { Button as ButtonPrimitive } from '@base-ui/react/button'

import { cn } from '../lib'

type ButtonProps = ButtonPrimitive.Props & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ variant, className, ...props }: ButtonProps) => (
  <ButtonPrimitive
    className={cn(
      `text-md tablet:text-xl tablet:px-15 tablet:py-4 rounded-xl px-10 py-3
      font-medium transition-colors disabled:cursor-not-allowed
      disabled:text-white/60`,
      variant === 'primary' && 'bg-orange hocus:bg-coral',
      variant === 'secondary' && 'hocus:border-orange border border-white/30',
      className
    )}
    {...props}
  />
)
