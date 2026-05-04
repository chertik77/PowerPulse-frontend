import { graphql } from '@/shared/api'

export const SignupDocument = graphql(`
  mutation signup($input: SignupInput!) {
    signup(input: $input)
  }
`)
