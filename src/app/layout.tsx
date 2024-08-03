import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export const metadata: Metadata = {
  title: 'Green Rewards',
  description: 'Faça a diferença no mundo fazendo missões!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.variable} antialiased`} lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
