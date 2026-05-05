'use client'

import { Scoped } from '../lib/form-steps'
import { StepForm } from './StepForm'
import { StepIndicator } from './StepIndicator'

export const DailyIntakePage = () => (
  <Scoped>
    <StepForm />
    <StepIndicator />
  </Scoped>
)
