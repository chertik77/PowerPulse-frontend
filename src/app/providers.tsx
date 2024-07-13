'use client'

import type { PropsWithChildren } from 'react'

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toast'

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
  })

let browserQueryClient: QueryClient | undefined = undefined

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()

    return browserQueryClient
  }
}

export const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer position='top-right' />
    </QueryClientProvider>
  )
}
