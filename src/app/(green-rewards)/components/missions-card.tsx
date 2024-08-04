import { Chip } from '@nextui-org/react'
import { BadgeCheckIcon, CheckCheck, Coins } from 'lucide-react'

export function MissionsCard() {
  return (
    <main className="flex w-full flex-col space-y-6 rounded-md border-2 bg-gray-200 p-4 transition-all hover:border-2 hover:border-primary">
      <header>
        <section className="flex justify-between">
          <h1 className="text-base">
            <span className="font-bold text-primary">Missão: </span>
            Percorrer 2km de Bicicleta
          </h1>
          <CheckCheck className="text-green-400" />
        </section>
        <article className="flex items-center space-x-2">
          <strong className="font-bold">SOS RS</strong>
          <BadgeCheckIcon className="fill-primary text-white" />
        </article>
      </header>

      <section>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          porro magni tempore quaerat consequuntur facere deleniti quas nobis
          odit nihil iure maxime, dolore exercitationem aliquid dolorem eligendi
          odio iste?
        </p>
      </section>

      <article className="flex space-x-2">
        <Chip color="primary" radius="sm" variant="flat">
          Bicicleta
        </Chip>
        <Chip color="primary" radius="sm" variant="flat">
          Corrida
        </Chip>
        <Chip color="primary" radius="sm" variant="flat">
          Sla
        </Chip>
      </article>
      <footer className="flex w-full justify-end">
        <span className="flex items-center space-x-1 text-4xl text-green-400">
          +<strong>20</strong>
          <Coins className="text-green-400" size={32} />
        </span>
      </footer>
    </main>
  )
}
