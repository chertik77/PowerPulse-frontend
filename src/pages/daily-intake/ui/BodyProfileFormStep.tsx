import type { FormStepProps } from '../model/types'

import dynamic from 'next/dynamic'
import { Controller } from 'react-hook-form'

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  NumberInput,
  NumberInputRoot
} from '@/shared/ui'

const BirthdayDatePicker = dynamic(
  () => import('@/entities/user').then(m => m.BirthdayDatePicker),
  { ssr: false }
)

export const BodyProfileFormStep = ({ control }: FormStepProps) => (
  <FieldGroup
    className='tablet:mb-8 tablet:grid-cols-3 tablet:max-w-131.75 mb-7.5 grid
      grid-cols-2 gap-3.5'>
    <Controller
      name='height'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Height</FieldLabel>
          <NumberInputRoot
            min={150}
            allowOutOfRange>
            <NumberInput
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoFocus
            />
          </NumberInputRoot>
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
    <Controller
      name='currentWeight'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Current Weight</FieldLabel>
          <NumberInputRoot
            min={35}
            allowOutOfRange>
            <NumberInput
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
            />
          </NumberInputRoot>
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
    <Controller
      name='desiredWeight'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Desired Weight</FieldLabel>
          <NumberInputRoot
            min={35}
            allowOutOfRange>
            <NumberInput
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
            />
          </NumberInputRoot>
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
    <Controller
      name='birthday'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Birthday</FieldLabel>
          <BirthdayDatePicker {...field} />
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  </FieldGroup>
)
