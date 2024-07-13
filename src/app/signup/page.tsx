import { SignupForm } from '@/components/auth/SignupForm'
import { MainLayout } from '@/components/MainLayout'

const SignupPage = () => {
  return (
    <MainLayout>
      <h2 className='mb-3.5 text-2xl font-bold tablet:mb-4 tablet:text-3xl'>
        Sign Up
      </h2>
      <p className='mb-7 text-base font-normal text-white/30 tablet:mb-8 tablet:w-[440px]'>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <SignupForm />
    </MainLayout>
  )
}

export default SignupPage
