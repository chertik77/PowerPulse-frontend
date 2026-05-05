import type { PropsWithChildren } from 'react'

import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/shared/lib'

export const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <TanstackQueryClientProvider client={queryClient}>
    {children}
  </TanstackQueryClientProvider>
)
