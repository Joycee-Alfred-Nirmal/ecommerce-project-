import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'E-Commerce',
  description: 'An interactive e-commerce website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
