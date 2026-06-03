import type { ComponentProps } from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import { cn } from '../lib'
import { Button } from './Button'
import { Icon } from './Icon'

const Dialog = ({ ...props }: DialogPrimitive.Root.Props) => (
  <DialogPrimitive.Root
    data-slot='dialog'
    {...props}
  />
)

const DialogTrigger = ({ ...props }: DialogPrimitive.Trigger.Props) => (
  <DialogPrimitive.Trigger
    data-slot='dialog-trigger'
    {...props}
  />
)

const DialogPortal = ({ ...props }: DialogPrimitive.Portal.Props) => (
  <DialogPrimitive.Portal
    data-slot='dialog-portal'
    {...props}
  />
)

const DialogClose = ({ ...props }: DialogPrimitive.Close.Props) => (
  <DialogPrimitive.Close
    data-slot='dialog-close'
    {...props}
  />
)

const DialogOverlay = ({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) => (
  <DialogPrimitive.Backdrop
    data-slot='dialog-overlay'
    className={cn(
      `data-open:animate-in data-open:fade-in-0 data-closed:animate-out
      data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/10 duration-100
      supports-backdrop-filter:backdrop-blur-xs`,
      className
    )}
    {...props}
  />
)

const DialogContent = ({
  className,
  children,
  hasCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  hasCloseButton?: boolean
}) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      data-slot='dialog-content'
      className={cn(
        `data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95
        data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95
        fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2
        -translate-y-1/2 gap-4 rounded-xl bg-[#10100F] py-12 duration-100
        outline-none`,
        className
      )}
      {...props}>
      {children}
      {hasCloseButton && (
        <DialogPrimitive.Close
          data-slot='dialog-close'
          render={
            <Button
              variant='ghost'
              className='tablet:top-4 tablet:right-4 absolute top-3.5 right-3.5'>
              <Icon
                name='x'
                className='tablet:size-6.5 size-5.5 stroke-white'
              />
              <span className='sr-only'>Close</span>
            </Button>
          }
        />
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
)

const DialogHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    data-slot='dialog-header'
    className={cn('flex flex-col gap-1', className)}
    {...props}
  />
)

const DialogFooter = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => (
  <div
    data-slot='dialog-footer'
    className={cn(
      'tablet:justify-start tablet:gap-4 flex flex-row gap-3.5',
      className
    )}
    {...props}>
    {children}
  </div>
)

const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => (
  <DialogPrimitive.Title
    data-slot='dialog-title'
    className={cn('text-2xl font-bold', className)}
    {...props}
  />
)

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogPortal,
  DialogTitle,
  DialogTrigger
}
