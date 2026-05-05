import { SigninForm } from './SigninForm'

export const SigninPage = () => (
  <>
    <h2 className='tablet:mb-4 tablet:text-3xl mb-3.5 text-2xl font-bold'>
      Sign In
    </h2>
    <p className='tablet:mb-8 mb-7 text-base font-normal text-white/30'>
      Welcome! Please enter your credentials to login to the platform:
    </p>
    <SigninForm />
  </>
)
