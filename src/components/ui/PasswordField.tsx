import type { InputHTMLAttributes } from 'react'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { Icon } from './Icon'

export const PasswordField = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false)

  const { register, formState } = useFormContext()

  return (
    <>
      <div className='relative w-full'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            `h-[46px] w-full rounded-xl border border-white/30 bg-transparent px-3.5
            outline-none placeholder:text-white/60 autofill:bg-clip-text
            autofill:text-fill-white focus:border-orange`,
            className,
            {
              'border-success':
                !formState.errors.password && formState.dirtyFields.password,
              '!mb-2 border-error': formState.errors.password
            }
          )}
          placeholder='Password'
          {...register('password')}
          {...props}
        />
        <button
          type='button'
          className='absolute right-3.5 top-4'
          onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? (
            <Icon
              name='settings'
              className='size-4'
            />
          ) : (
            <Icon
              name='eye-off'
              className='size-4'
            />
          )}
        </button>
      </div>
      <ErrorMessage
        errors={formState.errors}
        name='password'
        render={({ message }) => <p className='ml-2 text-error'>{message}</p>}
      />
    </>
  )
}
