'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinksProps = {
  [x: string]: Array<{ label: string; href: string }>
}

export function NavbarComponent() {
  const pathName = usePathname()

  const currentPath = pathName.split('/')[1] ?? 'player'

  const navLinks: NavLinksProps = {
    player: [
      {
        label: 'Missões',
        href: '/player/missions',
      },
      {
        label: 'Resgatar Prêmios',
        href: '/player/rescue',
      },
    ],
    supporter: [
      {
        label: 'Missões',
        href: '/supporter/missions',
      },
      {
        label: 'Resgatar Prêmios',
        href: '/supporter/rescue',
      },
    ],
    institution: [
      {
        label: 'Instituições',
        href: '/institution',
      },
      {
        label: 'Resgatar Prêmios',
        href: '/institution/rescue',
      },
    ],
  }

  const hasActiveLink = (path: string) => {
    return pathName === path
  }

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">green-rewards</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navLinks[currentPath].map((navItem) => (
          <NavbarItem key={navItem.href} isActive={hasActiveLink(navItem.href)}>
            <Link color="foreground" href={navItem.href}>
              {navItem.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Avatar name="Joe" isBordered color="default" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
