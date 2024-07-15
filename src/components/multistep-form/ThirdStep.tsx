import { Button, Icon } from '../ui'

type ThirdStepProps = {
  goToPreviousStep: () => void
}

export const ThirdStep = ({ goToPreviousStep }: ThirdStepProps) => {
  return (
    <div>
      <h2 className='mb-3.5 text-2xl font-bold tablet:mb-4 tablet:text-3xl'>
        Dear user
      </h2>
      <p className='mb-7 text-white/30 tablet:mb-16 tablet:w-[496px]'>
        Thank you for filling in all the required data. We greatly appreciate
        your cooperation and commitment to a healthy lifestyle. The collected
        information will allow us to provide you with a more individual and
        personalized approach.
      </p>
      <div className='flex items-center gap-4'>
        <Button className='w-[100px] tablet:w-[175px]'>Go</Button>
        <button
          className='flex items-center text-base font-normal text-white/60'
          onClick={goToPreviousStep}>
          <Icon
            name='arrow-back'
            className='size-5'
          />
          Back
        </button>
      </div>
    </div>
  )
}
