
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

import { ModalProvider } from '@/provviders/modal-provider'
import { ToasterProvider } from '@/provviders/toast-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider/>
          {children}
        </body>
      </html>

    </ClerkProvider>
    
  )
}
