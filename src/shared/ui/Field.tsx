import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { useMemo } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '../lib'

const FieldGroup = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    data-slot='field-group'
    className={cn(
      `tablet:gap-5 group/field-group @container/field-group flex w-full
      flex-col gap-4.5`,
      className
    )}
    {...props}
  />
)

const FieldSet = ({ className, ...props }: ComponentProps<'fieldset'>) => (
  <fieldset
    data-slot='field-set'
    className={cn(
      'flex flex-col gap-4 has-[>[data-slot=radio-group]]:gap-3',
      className
    )}
    {...props}
  />
)

const FieldLegend = ({
  className,
  variant = 'legend',
  ...props
}: ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) => (
  <legend
    data-variant={variant}
    className={cn('tablet:text-md mb-4 text-base', className)}
    {...props}
  />
)

const fieldVariants = cva(
  'group/field flex w-full gap-2 data-[invalid=true]:text-red text-white',
  {
    variants: {
      orientation: {
        vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
        horizontal: 'flex-row items-center *:data-[slot=field-label]:flex-auto'
      }
    },
    defaultVariants: {
      orientation: 'vertical'
    }
  }
)

const Field = ({
  className,
  orientation = 'vertical',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof fieldVariants>) => (
  <div
    role='group'
    data-slot='field'
    data-orientation={orientation}
    className={cn(fieldVariants({ orientation }), className)}
    {...props}
  />
)

const FieldLabel = ({ className, ...props }: ComponentProps<'label'>) => (
  <label
    data-slot='field-label'
    className={cn(
      `tablet:text-base group/field-label peer/field-label flex w-fit gap-2
      text-sm text-white/50 group-data-[disabled=true]/field:opacity-50
      has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col`,
      className
    )}
    {...props}
  />
)

const FieldError = ({
  className,
  children,
  errors,
  ...props
}: ComponentProps<'div'> & {
  errors?: ({ message?: string } | undefined)[]
}) => {
  const content = useMemo(() => {
    if (children) return children

    if (!errors?.length) return null

    const uniqueErrors = [
      ...new Map(errors.map(error => [error?.message, error])).values()
    ]

    if (uniqueErrors?.length == 1) return uniqueErrors[0]?.message

    return (
      <ul className='ml-2 flex list-disc flex-col gap-1'>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && (
              <li
                key={index}
                className='text-red ml-2'>
                {error.message}
              </li>
            )
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) return null

  return (
    <div
      role='alert'
      data-slot='field-error'
      className={cn('text-red ml-1', className)}
      {...props}>
      {content}
    </div>
  )
}

export { Field, FieldSet, FieldLegend, FieldLabel, FieldError, FieldGroup }
