import type { ComponentProps } from 'react'

import { useMemo } from 'react'

import { cn } from '../lib'

const FieldGroup = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn('tablet:gap-5 flex w-full flex-col gap-4.5', className)}
    {...props}
  />
)

type FieldProps = ComponentProps<'div'> & {
  orientation?: 'vertical' | 'horizontal'
}

const Field = ({
  className,
  orientation = 'vertical',
  ...props
}: FieldProps) => (
  <div
    role='group'
    data-orientation={orientation}
    className={cn(
      'flex w-full gap-2',
      orientation === 'vertical' && 'flex-col',
      orientation === 'horizontal' && 'flex-row items-center',
      className
    )}
    {...props}
  />
)

const FieldLabel = ({ className, ...props }: ComponentProps<'label'>) => (
  <label
    className={cn('tablet:text-base text-sm text-white/50', className)}
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
      className={cn('text-red ml-2', className)}
      {...props}>
      {content}
    </div>
  )
}

export { Field, FieldLabel, FieldError, FieldGroup }
