import { Button, Chip, Divider, Link } from '@nextui-org/react'
import { SwordsIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

export default function InstitutionMissionsLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-5 flex w-full items-center justify-between px-20">
        <Chip size="md" variant="bordered" color="warning">
          3 Missões
        </Chip>
        <Button
          as={Link}
          href="/institution/missions/new"
          color="success"
          size="md"
        >
          <SwordsIcon size={18} />
          Nova missão
        </Button>
      </div>
      <Divider />
      {children}
    </div>
  )
}
