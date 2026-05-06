'use client'

import Link from 'next/link'
import { Controller } from 'react-hook-form'

import { useAppForm } from '@/shared/lib'
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  Input,
  Loader
} from '@/shared/ui'

import { useSigninUser } from '../api/useSigninUser'
import { SigninSchema } from '../model/contract'

export const SigninForm = () => {
  const form = useAppForm(SigninSchema, {
    defaultValues: { email: '', password: '' }
  })

  const { signin, isLoading } = useSigninUser()

  return (
    <form
      onSubmit={form.handleSubmit(data =>
        signin({ variables: { input: data } })
      )}>
      <FieldGroup className='tablet:w-91 tablet:mb-16 mb-8'>
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoFocus
                placeholder='Email'
                autoComplete='email'
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder='Password'
                autoComplete='new-password'
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type='submit'
        disabled={isLoading}
        className='tablet:w-47.5 mb-3 w-34'>
        {isLoading ? <Loader className='text-white' /> : 'Sign In'}
      </Button>
      <p className='tablet:ml-2.5 text-sm text-white/60'>
        Don’t have an account?{' '}
        <Link
          href='/auth/signup'
          className='text-white underline'>
          Sign Up
        </Link>
      </p>
    </form>
  )
}
