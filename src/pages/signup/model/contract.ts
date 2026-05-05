import * as v from 'valibot'

export const SignupSchema = v.object({
  name: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, 'The name must be at least 2 characters long.')
  ),
  email: v.pipe(v.string(), v.trim(), v.email('The email is not valid.')),
  password: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(6, 'The password must be at least 6 characters long.')
  )
})

export type SignupSchema = v.InferOutput<typeof SignupSchema>
