import type { SignupSchema } from '@/lib/schemas'
import type { InputHTMLAttributes } from 'react'

import { forwardRef } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: keyof SignupSchema
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, inputName, ...props }) => {
    const { register, formState } = useFormContext()

    return (
      <>
        <input
          type='text'
          className={cn(
            `h-[46px] w-full rounded-xl border border-white/30 bg-transparent px-3.5
            outline-none placeholder:text-white/60 autofill:bg-clip-text
            autofill:text-fill-white focus:border-orange`,
            className,
            {
              'border-success':
                !formState.errors[inputName] &&
                formState.dirtyFields[inputName],
              '!mb-2 border-error': formState.errors[inputName]
            }
          )}
          placeholder={inputName.charAt(0).toUpperCase() + inputName.slice(1)}
          {...register(inputName)}
          {...props}
        />
        <ErrorMessage
          errors={formState.errors}
          name={inputName}
          render={({ message }) => (
            <p className='mb-3 ml-2 text-error'>{message}</p>
          )}
        />
      </>
    )
  }
)
