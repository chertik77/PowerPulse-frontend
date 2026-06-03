import { Icon } from './Icon'

export const Logo = () => (
  <span className='flex items-center gap-2'>
    <Icon
      name='logo'
      className='tablet:h-4.25 tablet:w-11 fill-orange h-3.25 w-9'
    />
    <p className='tablet:text-xl text-base font-medium'>PowerPulse</p>
  </span>
)
