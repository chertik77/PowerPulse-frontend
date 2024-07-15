import type { PropsWithChildren } from 'react'

import { Header } from '@/components/dashboard/header/Header'

const DashboardLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
  </>
)

export default DashboardLayout
