import type { PropsWithChildren } from 'react'

import { ApolloProvider } from '@apollo/client/react'

import { makeApolloClient } from '@/shared/api'

export const ApolloClientProvider = ({ children }: PropsWithChildren) => (
  <ApolloProvider client={makeApolloClient()}>{children}</ApolloProvider>
)
