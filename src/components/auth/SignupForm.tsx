'use client'

import { useAppForm } from '@/hooks'
import { SignupSchema } from '@/lib/schemas/user.schema'
import { FormProvider } from 'react-hook-form'

import { Field } from '../ui/Field'

export const SignupForm = () => {
  const methods = useAppForm<SignupSchema>(SignupSchema)

  return (
    <FormProvider {...methods}>
      <form>
        <Field inputName='name' />
        <Field inputName='email' />
      </form>
    </FormProvider>
  )
}
