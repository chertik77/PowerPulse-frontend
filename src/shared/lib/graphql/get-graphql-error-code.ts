import type { CombinedError } from 'urql'

export function getGraphQLErrorCode(error: CombinedError | undefined) {
  return error?.graphQLErrors?.[0]?.extensions?.code
}
