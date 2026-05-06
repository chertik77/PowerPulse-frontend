import type { CombinedGraphQLErrors } from '@apollo/client'

export const getGraphQLErrorCode = (error: CombinedGraphQLErrors | undefined) =>
  error?.errors?.map(e => e.extensions?.code)[0]
