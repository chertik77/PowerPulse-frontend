import { graphql } from '@/shared/api'

export const SigninDocument = graphql(`
  mutation signin($input: SigninInput!) {
    signin(input: $input)
  }
`)
