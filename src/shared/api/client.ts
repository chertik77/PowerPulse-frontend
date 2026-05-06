import {
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  Observable
} from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs'
import { ErrorLink } from '@apollo/client/link/error'

import { getGraphQLErrorCode } from '../lib'
import { LogoutDocument, RefreshTokensDocument } from './generated/graphql'

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_BASE_URL!,
  credentials: 'include'
})

const errorLink = new ErrorLink(({ error, operation, forward }) => {
  const context = operation.getContext()

  if (
    CombinedGraphQLErrors.is(error) &&
    getGraphQLErrorCode(error) === 'UNAUTHENTICATED' &&
    !context.skipAuthRefresh
  ) {
    return new Observable(observer => {
      ;(async () => {
        try {
          await apolloClient.mutate({
            mutation: RefreshTokensDocument,
            fetchPolicy: 'no-cache',
            context: { skipAuthRefresh: true }
          })

          forward(operation).subscribe(observer)
        } catch (e) {
          observer.error(e)

          if (
            CombinedGraphQLErrors.is(e) &&
            e.errors.some(err => err.message === 'jwt expired')
          ) {
            await apolloClient.mutate({
              mutation: LogoutDocument,
              fetchPolicy: 'no-cache'
            })

            window.location.href = '/'
          }
        }
      })()
    })
  }
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink])
})
