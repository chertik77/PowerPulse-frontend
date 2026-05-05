import { Popover as PopoverPrimitive } from '@base-ui/react/popover'

import { cn } from '../lib'

const Popover = ({ ...props }: PopoverPrimitive.Root.Props) => (
  <PopoverPrimitive.Root
    data-slot='popover'
    {...props}
  />
)

const PopoverTrigger = ({ ...props }: PopoverPrimitive.Trigger.Props) => (
  <PopoverPrimitive.Trigger
    data-slot='popover-trigger'
    {...props}
  />
)

const PopoverContent = ({
  className,
  align = 'center',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 5,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className='isolate z-1000'>
      <PopoverPrimitive.Popup
        data-slot='popover-content'
        className={cn(
          `fade-zoom z-1000 flex flex-col rounded-lg outline-hidden duration-100
          outline-none`,
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
)

export { Popover, PopoverTrigger, PopoverContent }
