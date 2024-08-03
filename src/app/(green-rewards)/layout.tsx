import { PropsWithChildren } from 'react'
import { Providers } from './providers'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <div className="flex h-full min-h-screen w-screen bg-background">
        {children}
      </div>
    </Providers>
  )
}
