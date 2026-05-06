import type { PropsWithChildren } from 'react'

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs'

import { apolloClient } from '@/shared/api'

export const ApolloClientProvider = ({ children }: PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={() => apolloClient}>
    {children}
  </ApolloNextAppProvider>
)
