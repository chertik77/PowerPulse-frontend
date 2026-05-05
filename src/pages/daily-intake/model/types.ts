import type { Control } from 'react-hook-form'
import type { DailyIntakeSchema } from './contract'

export type FormStepProps = {
  control: Control<DailyIntakeSchema>
}
