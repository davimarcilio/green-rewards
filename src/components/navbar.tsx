'use client'
import { ICorporation, IUser } from '@/models/auth'
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

  const { entity, logout } = useAuthStore(({ logout, entity }) => ({
    entity,
    logout,
  }))
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
    if (entity) {
      if (entity.type === 'PLAYER') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/missions/active', label: 'Missões Ativas' },
          { href: '/player/rescue', label: 'Prêmios' },
        ])
      } else if (entity.type === 'ADMIN') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/admin', label: 'Aprovar requisições' },
        ])
      }

      if (entity.type === 'SPONSOR') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/sponsor/rascue', label: 'Meus Prêmios' },
          { href: '/sponsor/institution', label: 'Ajudar Instituições' },
        ])
      } else if (entity.type === 'INSTITUTION') {
        setNavLinks([
          { href: '/missions', label: 'Missões' },
          { href: '/institution/mission', label: 'Minhas missões' },
        ])
      }
    }
  }, [entity])

  const entityUser = entity as IUser
  const entityCorporation = entity as ICorporation

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
          <Link href="/edit">
            <Avatar
              name={entityUser?.username ?? entityCorporation?.businessName}
              isBordered
              size="md"
              color={hasActiveLink('/edit') ? 'success' : 'default'}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
