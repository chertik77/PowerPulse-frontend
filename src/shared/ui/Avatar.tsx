import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '../lib'
import { Icon } from './Icon'

const Avatar = ({ className, ...props }: AvatarPrimitive.Root.Props) => (
  <AvatarPrimitive.Root
    data-slot='avatar'
    className={cn(
      `group/avatar tablet:size-11.5 border-orange size-9.25 shrink-0
      rounded-full border select-none`,
      className
    )}
    {...props}
  />
)

const AvatarImage = ({ className, ...props }: AvatarPrimitive.Image.Props) => (
  <AvatarPrimitive.Image
    referrerPolicy='no-referrer'
    data-slot='avatar-image'
    className={cn(
      'aspect-square size-full rounded-full object-cover',
      className
    )}
    {...props}
  />
)

const AvatarFallback = ({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) => (
  <AvatarPrimitive.Fallback
    data-slot='avatar-fallback'
    className={cn(
      'bg-gray/30 flex size-full items-center justify-center rounded-full',
      className
    )}
    {...props}>
    <Icon
      name='user'
      className='tablet:size-6 size-5.25 fill-white/10 stroke-white/10'
    />
  </AvatarPrimitive.Fallback>
)

export { Avatar, AvatarImage, AvatarFallback }
