'use client'

import type { PropsWithChildren } from 'react'

import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ApolloClientProvider } from './ApolloClientProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = ({ children }: PropsWithChildren) => (
  <ApolloClientProvider>
    <NuqsAdapter>{children}</NuqsAdapter>
    <ToastProvider />
  </ApolloClientProvider>
)
