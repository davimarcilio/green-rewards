import { AwardCard } from '@/components/cards/award-card'
import { Button } from '@nextui-org/react'
import { Plus } from 'lucide-react'

export default function page() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores cupiditate tempora. Sed nisi ut assumenda, veritatis quod dolore voluptatem autem harum aliquid provident veniam quasi dolor blanditiis iusto optio?'
  return (
    <main className="flex min-h-screen flex-col gap-4 p-4">
      <header className="flex w-full items-center justify-between">
        <div />
        <Button
          color="primary"
          startContent={<Plus />}
          className="rounded-md font-bold"
        >
          Cadastrar Prêmio
        </Button>
      </header>
      <article className="grid flex-grow grid-cols-3 gap-4 overflow-y-auto p-2">
        <AwardCard
          description={lorem}
          name="Gift Minecraft"
          quantity={2}
          unitPrice={200}
          link="https://www.fullcards.com.br/gift-card-digital-minecraft-java-e-bedrock-cartao-presente/?srsltid=AfmBOorvKrYWPg3lVcWwMDGPXT36-Jq_yBGZNywnwxADdeOMISIAl7xznrY"
        />
        <AwardCard
          description={lorem}
          name="Gift Spotify"
          quantity={8}
          unitPrice={200}
        />
        <AwardCard
          description={lorem}
          name="Gift Teste"
          quantity={4}
          unitPrice={200}
        />
      </article>
    </main>
  )
}
