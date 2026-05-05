'use client'

import type { PropsWithChildren } from 'react'

import { QueryClientProvider } from './QueryClientProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryClientProvider>
    {children}
    <ToastProvider />
  </QueryClientProvider>
)
