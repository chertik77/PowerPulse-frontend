import { Root } from '@radix-ui/react-radio-group'

import { RadioInput } from '../ui'

export const SecondStep = () => {
  return (
    <h2 className='mb-3.5 text-2xl font-bold tablet:mb-4 tablet:text-3xl'>
      Get closer to your goals!
      <Root>
        <label>
          Blood:
          {['1', '2', '3', '4'].map(blood => (
            <RadioInput
              value={blood}
              key={blood}>
              {blood}
            </RadioInput>
          ))}
        </label>
      </Root>
    </h2>
  )
}
