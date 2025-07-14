import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bitroot App',
  description: 'Where language takes root — and culture comes alive.',
  generator: 'Techgators',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
