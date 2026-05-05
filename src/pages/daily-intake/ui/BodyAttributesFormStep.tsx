import type { FormStepProps } from '../model/types'

import { Controller } from 'react-hook-form'

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem
} from '@/shared/ui'

import { ACTIVITY_LEVEl } from '../config/activity-level'
import { BLOOd } from '../config/blood'
import { SEx } from '../config/sex'

export const BodyAttributesFormStep = ({ control }: FormStepProps) => (
  <FieldGroup
    className='tablet:mb-8 tablet:gap-y-8 tablet:gap-x-16 mb-7.5 flex-row
      flex-wrap gap-x-16 gap-y-7 *:basis-[calc(50%-2rem)]'>
    <Controller
      name='blood'
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet className='max-w-max'>
          <FieldLegend>Blood:</FieldLegend>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}>
            {BLOOd.map(b => (
              <FieldLabel
                key={b.key}
                htmlFor={b.key}>
                <Field
                  orientation='horizontal'
                  className='w-fit'
                  data-invalid={fieldState.invalid}>
                  <RadioGroupItem
                    value={b.key}
                    id={b.key}
                    aria-invalid={fieldState.invalid}
                  />
                  {b.label} ({b.key})
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </FieldSet>
      )}
    />
    <Controller
      name='sex'
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet>
          <FieldLegend>Sex:</FieldLegend>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}>
            {SEx.map(s => (
              <FieldLabel
                key={s.key}
                htmlFor={s.key}>
                <Field
                  orientation='horizontal'
                  className='w-fit'
                  data-invalid={fieldState.invalid}>
                  <RadioGroupItem
                    value={s.key}
                    id={s.key}
                    aria-invalid={fieldState.invalid}
                  />
                  {s.label}
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </FieldSet>
      )}
    />
    <Controller
      name='activityLevel'
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet className='flex-1'>
          <FieldLegend>Level Activity:</FieldLegend>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}>
            {ACTIVITY_LEVEl.map(a => (
              <FieldLabel
                key={a.key}
                htmlFor={a.key.toString()}>
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}>
                  <RadioGroupItem
                    value={a.key}
                    id={a.key.toString()}
                    aria-invalid={fieldState.invalid}
                  />
                  {a.label}
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </FieldSet>
      )}
    />
  </FieldGroup>
)
