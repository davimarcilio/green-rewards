'use client'
import { NavbarComponent } from '../components/navbar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavbarComponent />
      {children}
    </div>
  )
}
