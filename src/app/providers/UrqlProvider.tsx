import type { PropsWithChildren } from 'react'

import { Provider } from 'urql'

import { graphQLClient } from '@/shared/api'

export const UrqlProvider = ({ children }: PropsWithChildren) => (
  <Provider value={graphQLClient}>{children}</Provider>
)
