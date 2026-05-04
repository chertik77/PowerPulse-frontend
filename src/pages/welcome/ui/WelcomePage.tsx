import Link from 'next/link'

import { AuthLayout } from '@/shared/layouts'
import { Button, Icon } from '@/shared/ui'

export const WelcomePage = () => (
  <AuthLayout>
    <h1 className='tablet:mb-16 tablet:w-149.5 tablet:text-7xl mb-10 text-4xl'>
      Transforming your{' '}
      <span className='relative'>
        body
        <Icon
          name='line'
          className='tablet:h-16.75 tablet:w-46.25 stroke-beige absolute top-1/2
            left-1/2 h-9 w-24.5 -translate-x-1/2 -translate-y-1/2'
        />
      </span>{' '}
      shape with Power Pulse
    </h1>
    <Button
      render={<Link href='/signup' />}
      nativeButton={false}
      className='tablet:mr-5 tablet:px-15 tablet:py-4 mr-3.5 px-10 py-3'>
      Sign Up
    </Button>
    <Button
      render={<Link href='/signin' />}
      variant='secondary'
      nativeButton={false}
      className='tablet:mr-5 tablet:px-15 tablet:py-4 mr-3.5 px-10 py-3'>
      Sign In
    </Button>
  </AuthLayout>
)
