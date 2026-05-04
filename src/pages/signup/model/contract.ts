import * as v from 'valibot'

export const SignupSchema = v.object({
  name: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, 'Please enter at least 2 characters.')
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.email('Please enter a valid email address.')
  ),
  password: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(6, 'Please enter at least 6 characters.')
  )
})

export type SignupSchema = v.InferOutput<typeof SignupSchema>
