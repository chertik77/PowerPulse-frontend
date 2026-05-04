import { AuthLayout } from '@/shared/layouts'

import { SignupForm } from './SignupForm'

export const SignupPage = () => (
  <AuthLayout>
    <h2 className='tablet:mb-4 tablet:text-3xl mb-3.5 text-2xl font-bold'>
      Sign Up
    </h2>
    <p
      className='tablet:mb-8 tablet:w-110 mb-7 text-base font-normal
        text-white/30'>
      Thank you for your interest in our platform. To complete the registration
      process, please provide us with the following information.
    </p>
    <SignupForm />
  </AuthLayout>
)
