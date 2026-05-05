import * as v from 'valibot'

export const SigninSchema = v.object({
  email: v.pipe(v.string(), v.trim(), v.email('The email is not valid.')),
  password: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(6, 'The password must be at least 6 characters long.')
  )
})

export type SigninSchema = v.InferOutput<typeof SigninSchema>
