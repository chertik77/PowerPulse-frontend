'use client'

import Link from 'next/link'
import { Pages } from '@/config'
import { useAppForm } from '@/hooks'
import { SignupSchema } from '@/lib/schemas/user.schema'
import { FormProvider } from 'react-hook-form'

import { Button, Field } from '../ui'
import { PasswordField } from '../ui/PasswordField'

export const SignupForm = () => {
  const methods = useAppForm<SignupSchema>(SignupSchema)

  return (
    <FormProvider {...methods}>
      <form className='tablet:w-[364px]'>
        <Field
          inputName='name'
          className='mb-[18px] tablet:mb-5'
        />
        <Field
          inputName='email'
          className='mb-[18px] tablet:mb-5'
        />
        <PasswordField />
        <Button className='mb-3 mt-7 block w-[136px] tablet:mt-16 tablet:w-[190px]'>
          Sign Up
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
