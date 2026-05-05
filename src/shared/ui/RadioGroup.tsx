import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'

import { cn } from '../lib'

const RadioGroup = ({ className, ...props }: RadioGroupPrimitive.Props) => (
  <RadioGroupPrimitive
    data-slot='radio-group'
    className={cn('grid w-full gap-2', className)}
    {...props}
  />
)

const RadioGroupItem = ({ className, ...props }: RadioPrimitive.Root.Props) => (
  <RadioPrimitive.Root
    data-slot='radio-group-item'
    className={cn(
      `border-gray data-checked:border-coral group/radio-group-item peer
      aria-invalid:border-red aria-invalid:ring-red/20
      aria-invalid:aria-checked:border-coral focus-visible:border-orange
      focus-visible:ring-orange/50 relative flex aspect-square size-4.5 shrink-0
      rounded-full border-2 outline-none focus-visible:ring-3
      disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3`,
      className
    )}
    {...props}>
    <RadioPrimitive.Indicator
      data-slot='radio-group-indicator'
      className='flex size-2.5 items-center justify-center'>
      <span
        className='bg-coral absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2
          -translate-y-1/2 rounded-full'
      />
    </RadioPrimitive.Indicator>
  </RadioPrimitive.Root>
)

export { RadioGroup, RadioGroupItem }
