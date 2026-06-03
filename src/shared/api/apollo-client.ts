import {
  ApolloClient,
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  InMemoryCache,
  Observable
} from '@apollo/client'
import { ErrorLink } from '@apollo/client/link/error'

import { getGraphQLErrorCode } from '../lib'
import { LogoutDocument, RefreshTokensDocument } from './generated/graphql'

let client: ApolloClient

export const makeApolloClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_BASE_URL,
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
            await client.mutate({
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
              await client.mutate({
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

  client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, httpLink])
  })

  return client
}
