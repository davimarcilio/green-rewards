'use client'
import { NavbarComponent } from '../components/navbar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-full">
      <NavbarComponent />
      {children}
    </div>
  )
}
