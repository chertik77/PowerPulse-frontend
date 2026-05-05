import { Button, Icon, Loader } from '@/shared/ui'

import { useStepper } from '../lib/form-steps'

type StepActionsProps = {
  isLoading: boolean
}

export const StepActions = ({ isLoading }: StepActionsProps) => {
  const stepper = useStepper()

  return (
    <div className='flex items-center gap-4'>
      {stepper.state.isLast && (
        <Button
          type='submit'
          disabled={isLoading}
          className='tablet:py-4 tablet:px-18.75 px-10 py-3'>
          {isLoading ? <Loader /> : 'Go'}
        </Button>
      )}
      {!stepper.state.isFirst && (
        <Button
          variant='ghost'
          onClick={() => stepper.navigation.prev()}
          className='tablet:text-md gap-1 text-base text-white/60'>
          <Icon
            name='arrow'
            className='stroke-orange rotate-180'
          />
          Back
        </Button>
      )}
      {!stepper.state.isLast && (
        <Button
          type='submit'
          variant='ghost'
          className='tablet:text-md gap-1 text-base'>
          Next
          <Icon
            name='arrow'
            className='stroke-orange'
          />
        </Button>
      )}
    </div>
  )
}
