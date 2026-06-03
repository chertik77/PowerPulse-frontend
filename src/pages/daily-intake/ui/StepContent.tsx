import { useStepper } from '../lib/form-steps'
import { useStepForm } from '../lib/useStepForm'
import { useSyncSteps } from '../lib/useSyncSteps'
import { BodyAttributesFormStep } from './BodyAttributesFormStep'
import { BodyProfileFormStep } from './BodyProfileFormStep'
import { StepActions } from './StepActions'

export const StepContent = () => {
  const stepper = useStepper()

  const { form, onSubmit, isLoading } = useStepForm()

  useSyncSteps()

  return (
    <>
      <h2 className='tablet:mb-4 tablet:text-3xl mb-3.5 text-2xl font-bold'>
        {stepper.state.current.data.title}
      </h2>
      <p
        className='tablet:mb-13.5 tablet:w-127.5 tablet:text-md mb-7 text-base
          text-white/30'>
        {stepper.state.current.data.description}
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {stepper.flow.switch({
          profile: () => <BodyProfileFormStep control={form.control} />,
          attributes: () => <BodyAttributesFormStep control={form.control} />,
          done: () => null
        })}
        <StepActions isLoading={isLoading} />
      </form>
    </>
  )
}
