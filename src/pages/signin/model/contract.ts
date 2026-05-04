import * as v from 'valibot'

export const SigninSchema = v.object({
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

export type SigninSchema = v.InferOutput<typeof SigninSchema>
