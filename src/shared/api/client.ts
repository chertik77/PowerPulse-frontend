import { ApolloLink, HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs'

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_BASE_URL!,
  credentials: 'include',
  fetchOptions: { next: { revalidate: 60 } }
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink])
})
