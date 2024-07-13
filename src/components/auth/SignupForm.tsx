'use client'

import Link from 'next/link'
import { FormProvider } from 'react-hook-form'

import { useAppForm } from '@/hooks'
import { useSignupUser } from '@/hooks/auth'

import { Pages } from '@/config'

import { SignupSchema } from '@/lib/schemas'

import { Button, Field, Loader, PasswordField } from '../ui'

export const SignupForm = () => {
  const methods = useAppForm<SignupSchema>(SignupSchema)

  const { isPending, mutate } = useSignupUser(methods.reset)

  return (
    <FormProvider {...methods}>
      <form
        className='tablet:w-[364px]'
        onSubmit={methods.handleSubmit(data => mutate(data))}>
        <Field
          autoFocus
          inputName='name'
          className='mb-[18px] tablet:mb-5'
        />
        <Field
          inputName='email'
          className='mb-[18px] tablet:mb-5'
        />
        <PasswordField />
        <Button
          className='mb-3 mt-7 block w-[136px] tablet:mt-16 tablet:w-[190px]'
          disabled={isPending}>
          {isPending ? <Loader /> : 'Sign Up'}
        </Button>
      </form>
      <p className='text-sm text-white/60 tablet:ml-[15px]'>
        Already have account?{' '}
        <Link
          href={Pages.Signin}
          className='text-white underline'>
          Sign In
        </Link>
      </p>
    </FormProvider>
  )
}
