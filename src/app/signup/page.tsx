import { SignupForm } from '@/components/auth/SignupForm'
import { MainLayout } from '@/components/MainLayout'

const SignupPage = () => {
  return (
    <MainLayout>
      <h2 className='mb-3.5 text-2xl font-bold'>Sign Up</h2>
      <p className='mb-7 text-base font-normal text-white/30'>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <SignupForm />
    </MainLayout>
  )
}

export default SignupPage
