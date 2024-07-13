'use client'

import Link from 'next/link'
import { FormProvider } from 'react-hook-form'

import { useAppForm } from '@/hooks'
import { useSigninUser } from '@/hooks/auth'

import { Pages } from '@/config'

import { SigninSchema } from '@/lib/schemas'

import { Button, Field, Loader, PasswordField } from '../ui'

export const SigninForm = () => {
  const methods = useAppForm<SigninSchema>(SigninSchema)

  const { isPending, mutate } = useSigninUser(methods.reset)

  return (
    <FormProvider {...methods}>
      <form
        className='tablet:w-[364px]'
        onSubmit={methods.handleSubmit(data => mutate(data))}>
        <Field
          inputName='email'
          className='mb-[18px] tablet:mb-5'
        />
        <PasswordField />
        <Button
          className='mb-3 mt-7 block w-[136px] tablet:mt-16 tablet:w-[190px]'
          disabled={isPending}>
          {isPending ? <Loader /> : 'Sign In'}
        </Button>
      </form>
      <p className='text-sm text-white/60 tablet:ml-2'>
        Don’t have an account?{' '}
        <Link
          href={Pages.Signup}
          className='text-white underline'>
          Sign Up
        </Link>
      </p>
    </FormProvider>
  )
}
