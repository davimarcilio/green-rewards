import { Button } from '@nextui-org/react'
import { BadgeCheckIcon, Coins } from 'lucide-react'

export function RescueCard() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex h-auto w-full flex-col space-y-6 rounded-md bg-content3 p-4">
        <header className="flex justify-end">
          <span className="flex items-center space-x-1 text-xl text-green-400">
            +<strong>20</strong>
            <Coins className="text-green-400" size={24} />
          </span>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          repellendus possimus esse dolores hic quaerat iusto, voluptates quod
          tenetur numquam adipisci. Inventore, unde hic? Blanditiis delectus ad
          ex vel quo.
        </p>
      </section>

      <article className="flex items-center justify-center space-x-2 rounded-md bg-content3 p-2">
        <strong className="font-bold">Americanas</strong>
        <BadgeCheckIcon className="fill-primary text-white" />
      </article>

      <Button color="primary" radius="sm">
        Resgatar
      </Button>
    </main>
  )
}
