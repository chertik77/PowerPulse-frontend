import { graphql } from '@/shared/api'

export const RefreshTokensDocument = graphql(`
  mutation refreshTokens {
    refreshTokens
  }
`)
