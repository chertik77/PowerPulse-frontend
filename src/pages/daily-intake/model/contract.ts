import { isBefore, subYears } from 'date-fns'
import * as v from 'valibot'

import { ACTIVITY_LEVEl } from '../config/activity-level'
import { BLOOd } from '../config/blood'
import { SEx } from '../config/sex'

export const BodyProfileSchema = v.object({
  height: v.pipe(
    v.string(),
    v.toNumber(),
    v.minValue(150, 'Must be at least 150cm.')
  ),
  currentWeight: v.pipe(
    v.string(),
    v.toNumber(),
    v.minValue(35, 'Must be at least 35kg.')
  ),
  desiredWeight: v.pipe(
    v.string(),
    v.toNumber(),
    v.minValue(35, 'Must be at least 35kg.')
  ),
  birthday: v.pipe(
    v.string(),
    v.transform(date => new Date(date)),
    v.date('Must be a valid date.'),
    v.check(
      date => isBefore(date, subYears(new Date(), 16)),
      'You must be at least 16 years old.'
    )
  )
})

export const BodyAttributesSchema = v.object({
  blood: v.fallback(v.picklist(BLOOd.map(b => b.key)), 'A'),
  sex: v.fallback(v.picklist(SEx.map(s => s.key)), 'male'),
  activityLevel: v.fallback(v.picklist(ACTIVITY_LEVEl.map(a => a.key)), 1)
})

export const DailyIntakeSchema = v.object({
  ...BodyProfileSchema.entries,
  ...BodyAttributesSchema.entries
})

export type DailyIntakeSchema = v.InferInput<typeof BodyProfileSchema> &
  v.InferInput<typeof BodyAttributesSchema>
