import { GraphQLClient } from 'graphql-request'

export const graphQLClient = new GraphQLClient(process.env.GRAPHQL_BASE_URL!, {
  credentials: 'include',
  next: { revalidate: 60 }
})
