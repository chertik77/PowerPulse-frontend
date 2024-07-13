import { SigninForm } from '@/components/auth/SigninForm'
import { MainLayout } from '@/components/MainLayout'

const SigninPage = () => {
  return (
    <MainLayout>
      <h2 className='mb-3.5 text-2xl font-bold tablet:mb-4 tablet:text-3xl'>
        Sign In
      </h2>
      <p className='mb-7 text-base font-normal text-white/30 tablet:mb-8'>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <SigninForm />
    </MainLayout>
  )
}

export default SigninPage
