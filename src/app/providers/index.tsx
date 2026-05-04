'use client'

import type { PropsWithChildren } from 'react'

import { ToastProvider } from './ToastProvider'
import { UrqlProvider } from './UrqlProvider'

export const Providers = ({ children }: PropsWithChildren) => (
  <UrqlProvider>
    {children}
    <ToastProvider />
  </UrqlProvider>
)
