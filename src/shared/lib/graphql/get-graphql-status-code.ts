import type { ClientError } from 'graphql-request'

export const getGraphQLStatusCode = (error: ClientError | undefined) =>
  error?.response.errors?.map(e => e.extensions?.statusCode)[0]
