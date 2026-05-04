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

import { useSignupUser } from '../api/useSignupUser'
import { SignupSchema } from '../model/contract'

export const SignupForm = () => {
  const form = useAppForm(SignupSchema, {
    defaultValues: { name: '', email: '', password: '' }
  })

  const { signup, isLoading } = useSignupUser(form.setError)

  return (
    <form onSubmit={form.handleSubmit(data => signup({ input: data }))}>
      <FieldGroup className='tablet:w-91 tablet:mb-16 mb-8'>
        <Controller
          name='name'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoFocus
                placeholder='Name'
                autoComplete='name'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder='Email'
                autoComplete='email'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type='submit'
        disabled={isLoading}
        className='tablet:w-47.5 mb-3 w-34'>
        {isLoading ? <Loader className='text-white' /> : 'Sign Up'}
      </Button>
      <p className='tablet:ml-2.5 text-sm text-white/60'>
        Already have account?{' '}
        <Link
          href='/signin'
          className='text-white underline'>
          Sign In
        </Link>
      </p>
    </form>
  )
}
