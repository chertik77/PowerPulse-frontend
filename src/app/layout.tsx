import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Power Pulse',
  description: 'Power Pulse'
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en'>
    <body
      className={`${roboto.className} bg-black text-base font-normal text-white tablet:text-md`}>
      <main>{children}</main>
    </body>
  </html>
)

export default RootLayout
