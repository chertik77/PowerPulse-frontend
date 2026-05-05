import type { GenericSchema } from 'valibot'

import { useFormPersist } from '@liorpo/react-hook-form-persist'
import { parse } from 'valibot'

import { useAppForm } from '@/shared/lib'

import { useCalculateDailyIntake } from '../api/useCalculateDailyIntake'
import { DailyIntakeSchema } from '../model/contract'
import { useStepper } from './form-steps'

export const useStepForm = () => {
  const stepper = useStepper()

  const schema = stepper.state.current.data.schema as
    | GenericSchema<DailyIntakeSchema>
    | undefined

  const { calculateDailyIntake, isLoading } = useCalculateDailyIntake()

  const form = useAppForm(schema, {
    defaultValues: {
      height: '',
      currentWeight: '',
      desiredWeight: '',
      activityLevel: 1,
      blood: 'A',
      sex: 'male'
    },
    mode: 'onSubmit'
  })

  const { clear } = useFormPersist('daily-intake', {
    control: form.control,
    setValue: form.setValue
  })

  const onSubmit = (data: DailyIntakeSchema) => {
    if (!stepper.state.isLast) return stepper.navigation.next()

    calculateDailyIntake(
      { input: parse(DailyIntakeSchema, data) },
      { onSuccess: clear }
    )
  }

  return { form, onSubmit, isLoading }
}
