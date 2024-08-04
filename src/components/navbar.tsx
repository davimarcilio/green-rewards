'use client'
import { useAuthStore } from '@/store/auth'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { LogOutIcon, MoonIcon, MoreVerticalIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type NavLinksProps = { label: string; href: string }

export function NavbarComponent() {
  const pathName = usePathname()

  const { corporation, user, logout } = useAuthStore(
    ({ user, corporation, logout }) => ({
      user,
      corporation,
      logout,
    }),
  )
  const router = useRouter()

  function handleLogout() {
    logout()
    router.push('/')
  }

  // const currentPath = pathName.split('/')[1] ?? 'player'

  // const navLinks: NavLinksProps = []

  const [navLinks, setNavLinks] = useState<NavLinksProps[]>([])

  const hasActiveLink = (path: string) => {
    return pathName === path
  }

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (user) {
      if (user.type === 'PLAYER') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/missions/active', label: 'Missões Ativas' },
          { href: '/player/rascue', label: 'Prêmios' },
        ])
      } else {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/Aprovações', label: 'Aprovar requisições' },
        ])
      }
    }

    if (corporation) {
      if (corporation.type === 'SPONSOR') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/sponsor/rascue', label: 'Meus Prêmios' },
          { href: '/sponsor/institution', label: 'Ajudar Instituições' },
        ])
      } else {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/institution/mission', label: 'Minhas missões' },
        ])
      }
    }
  }, [corporation, user])

  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Green Rewards</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navLinks.map((navItem) => (
          <NavbarItem key={navItem.href} isActive={hasActiveLink(navItem.href)}>
            <Link
              color={hasActiveLink(navItem.href) ? 'success' : 'foreground'}
              href={navItem.href}
            >
              {navItem.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="flex items-center justify-center" justify="end">
        <NavbarItem>
          <Dropdown closeOnSelect={false} showArrow>
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <MoreVerticalIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                startContent={
                  theme === 'light' ? (
                    <SunIcon size={16} />
                  ) : (
                    <MoonIcon size={16} />
                  )
                }
                onPress={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light')
                }}
              >
                Tema {theme === 'light' ? 'Claro' : 'Escuro'}
              </DropdownItem>
              <DropdownItem
                onPress={handleLogout}
                variant="flat"
                color="danger"
                startContent={<LogOutIcon size={16} />}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem className="flex items-center justify-center">
          <Link href="/player/edit">
            <Avatar
              name={user?.username}
              isBordered
              size="md"
              color={hasActiveLink('/player/edit') ? 'success' : 'default'}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
