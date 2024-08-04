'use client'
import { queryClient } from '@/lib/tanstack-query'
import { useAuthStore } from '@/store/auth'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: PropsWithChildren) {
  const router = useRouter()
  const { reloadToken } = useAuthStore(({ reloadToken }) => ({
    reloadToken,
  }))

  useEffect(() => {
    reloadToken()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <Toaster />
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}
