import type { SignupSchema } from '@/lib/schemas/user.schema'
import type { InputHTMLAttributes } from 'react'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: keyof SignupSchema
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, inputName, ...props }) => {
    const { register, formState } = useFormContext()

    console.log(formState.errors)
    return (
      <>
        <input
          type='text'
          className={cn(
            `mb-[18px] h-[46px] w-full rounded-xl border border-white/30 bg-transparent
            px-3.5 outline-none placeholder:text-white/60 autofill:bg-clip-text
            autofill:text-fill-white focus:border-orange`,
            className,
            formState.errors[inputName] && 'mb-2 border-error'
          )}
          placeholder={inputName.charAt(0).toUpperCase() + inputName.slice(1)}
          {...register(inputName)}
          {...props}
        />
        <ErrorMessage
          errors={formState.errors}
          name={inputName}
          render={({ message }) => (
            <p className='mb-3.5 ml-2 text-error'>{message}</p>
          )}
        />
      </>
    )
  }
)
