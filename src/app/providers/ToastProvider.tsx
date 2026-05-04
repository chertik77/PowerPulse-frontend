import type { PropsWithChildren } from 'react'

import { Toaster } from 'sonner'

export const ToastProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <Toaster
      duration={5000}
      className='text-balance'
      theme='dark'
      closeButton
    />
  </>
)
