import { Button } from '@nextui-org/react'
import { BadgeCheckIcon, Wallet } from 'lucide-react'

export function InstitutionCard() {
  return (
    <main className="flex h-auto w-full flex-col space-y-6 rounded-md bg-content3 p-4">
      <header className="flex items-center justify-between">
        <article className="flex items-center justify-center space-x-2 rounded-md bg-content3 p-2">
          <strong className="text-lg font-bold">Americanas</strong>
          <BadgeCheckIcon className="fill-primary text-white" />
        </article>
        <span className="flex space-x-1 text-xl text-green-400">
          <strong>200</strong>
          <Wallet className="text-green-400" size={24} />
        </span>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quisquam
        odio porro quasi voluptate asperiores, veniam, odit blanditiis
        voluptatum velit autem voluptatem laboriosam ex eveniet eligendi
        repudiandae! Porro, delectus ex.
      </p>

      <Button color="primary" radius="sm">
        Fazer Doação
      </Button>
    </main>
  )
}
