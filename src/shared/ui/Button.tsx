import { Button as ButtonPrimitive } from '@base-ui/react/button'

import { cn } from '../lib'

type ButtonProps = ButtonPrimitive.Props & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => (
  <ButtonPrimitive
    className={cn(
      `text-md tablet:text-xl tablet:h-14 flex h-10.5 items-center
      justify-center rounded-xl font-medium transition-colors
      disabled:cursor-not-allowed disabled:text-white/60`,
      variant === 'primary' && 'bg-orange enabled:hocus:bg-coral',
      variant === 'secondary' &&
        'enabled:hocus:border-orange border border-white/30',
      className
    )}
    {...props}
  />
)
