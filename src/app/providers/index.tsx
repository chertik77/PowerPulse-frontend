'use client'

import type { PropsWithChildren } from 'react'

import { ApolloClientProvider } from './ApolloClientProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = ({ children }: PropsWithChildren) => (
  <ApolloClientProvider>
    {children}
    <ToastProvider />
  </ApolloClientProvider>
)
