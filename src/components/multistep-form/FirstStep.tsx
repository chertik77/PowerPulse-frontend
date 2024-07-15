import { useFormContext } from 'react-hook-form'

import { Field } from '../ui'

export const FirstStep = () => {
  const { formState } = useFormContext()

  console.log(formState)
  return (
    <div>
      <h2 className='mb-3.5 text-2xl font-bold tablet:mb-4 tablet:text-3xl'>
        Get closer to your goals!
      </h2>
      <p className='mb-7 text-white/30 tablet:mb-8 tablet:w-[496px]'>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </p>
      <Field
        type='number'
        inputName='email'
      />
    </div>
  )
}
