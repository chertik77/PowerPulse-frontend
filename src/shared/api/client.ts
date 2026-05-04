import { cacheExchange, Client, fetchExchange } from 'urql'

export const graphQLClient = new Client({
  url: process.env.GRAPHQL_BASE_URL!,
  fetchOptions: { credentials: 'include' },
  exchanges: [cacheExchange, fetchExchange]
})
