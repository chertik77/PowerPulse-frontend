import Link from 'next/link'
import { MainLayout } from '@/components/MainLayout'
import { Icon } from '@/components/ui/Icon'
import { Pages } from '@/config'

const HomePage = () => {
  return (
    <MainLayout>
      <h1 className='mb-10 text-4xl tablet:mb-16 tablet:w-[598px] tablet:text-7xl'>
        Transforming your{' '}
        <span className='relative'>
          body
          <Icon
            name='line'
            className='absolute -right-1 top-[3px] h-[36px] w-[98px] tablet:right-[-6px]
              tablet:h-[67px] tablet:w-[185px]'
          />
        </span>{' '}
        shape with Power Pulse
      </h1>
      <Link
        className='mr-3.5 rounded-xl bg-orange px-10 py-3 text-md font-medium tablet:px-[60px]
          tablet:py-4 tablet:text-xl'
        href={Pages.Signup}>
        Sign Up
      </Link>
      <Link
        className='rounded-xl border border-white/30 px-10 py-3 text-md font-medium
          tablet:px-[60px] tablet:py-4 tablet:text-xl'
        href={Pages.Signin}>
        Sign In
      </Link>
    </MainLayout>
  )
}

export default HomePage
