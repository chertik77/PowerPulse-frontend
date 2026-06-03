'use client'

import { Scoped } from '../lib/form-steps'
import { useStep } from '../lib/useStep'
import { StepContent } from './StepContent'
import { StepIndicator } from './StepIndicator'

export const StepForm = () => {
  const { step } = useStep()

  return (
    <Scoped initialStep={step}>
      <StepContent />
      <StepIndicator />
    </Scoped>
  )
}
