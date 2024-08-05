'use client'
import { queryClient } from '@/lib/tanstack-query'
import { useAuthStore } from '@/store/auth'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
export function Providers({ children }: PropsWithChildren) {
  const router = useRouter()
  const pathName = usePathname()
  const { reloadToken } = useAuthStore(({ reloadToken }) => ({
    reloadToken,
  }))

  useEffect(() => {
    reloadToken()
    const currentPath = pathName.split('/')[1]
    if (!currentPath || currentPath.includes('auth')) {
      if (localStorage.getItem('@green-reward:1.0.0/refreshToken')) {
        router.push('/missions')
      }
    } else {
      if (!localStorage.getItem('@green-reward:1.0.0/refreshToken')) {
        router.push('/')
      }
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Toaster position="top-left" />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  )
}
