import { useEffect } from 'react'

import { useStepper } from './form-steps'
import { useStep } from './useStep'

export const useSyncSteps = () => {
  const stepper = useStepper()

  const { setStep } = useStep()

  useEffect(() => {
    const unsubscribe = stepper.lifecycle.onAfterTransition(({ to }) => {
      setStep(to.id)
    })

    return unsubscribe
  }, [setStep, stepper.lifecycle])
}
