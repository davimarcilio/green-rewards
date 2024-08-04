import { ICorporationType } from '@/models/auth'
import { AwardType } from '@/models/award'
import { Button, Link } from '@nextui-org/react'
import { Coins, LinkIcon, Trash, Trophy } from 'lucide-react'

type AwardCardType = AwardType & {
  typeUser?: ICorporationType
}

export function AwardCard({
  description,
  link,
  name,
  quantity,
  unitPrice,
  typeUser,
}: AwardCardType) {
  return (
    <main className="flex h-fit w-full flex-col space-y-6 rounded-md bg-content3 p-4">
      <header className="flex items-center justify-between">
        <article className="flex items-center justify-center space-x-2 rounded-md bg-content3 p-2">
          <Trophy className="text-warning" />
          <strong className="text-lg font-bold">
            {name.length > 15 ? name.substring(0, 15) : name}
          </strong>
        </article>
        <span className="flex space-x-1 text-xl text-green-400">
          <strong>{unitPrice}</strong>
          <Coins className="text-green-400" />
        </span>
      </header>

      <p>{description}</p>

      <span className="text-center text-4xl font-bold">{`${quantity}x`}</span>
      <footer className="flex flex-col gap-2">
        <Button
          color="primary"
          radius="sm"
          startContent={<LinkIcon />}
          isDisabled={!link}
          as={Link}
          href={link}
          target="_blank"
        >
          Acessar Link
        </Button>
        {typeUser === 'SPONSOR' && (
          <Button color="danger" radius="sm" startContent={<Trash />}>
            Deletar Premiação
          </Button>
        )}
      </footer>
    </main>
  )
}
