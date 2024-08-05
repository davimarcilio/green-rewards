'use client'
// import { api } from '@/lib/api'
// import { AwardType } from '@/models/award'
import { Button } from '@nextui-org/react'
import { Plus } from 'lucide-react'
import { SponsorAwards } from './components'

// const getAllAwards = async () => {
//   try {
//     const { data } = await api.get<AwardType[]>('award')

//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export default function Page() {
  // const allAwards = (await getAllAwards()) ?? []

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
      <SponsorAwards
        allAwards={[
          {
            id: 1,
            name: 'Gift Card de Loja Online',
            quantity: 4,
            unitPrice: 500,
            description:
              'Troque seus pontos por um gift card de R$ 50 para usar em compras em uma das maiores lojas online do país. Escolha entre uma variedade de produtos, desde eletrônicos a roupas e acessórios.',
          },
          {
            id: 2,
            name: 'Vale-Compras de Supermercado',
            quantity: 8,
            unitPrice: 1000,
            description:
              'Resgate um vale-compras de R$ 100 para gastar no seu supermercado favorito. Aproveite para fazer suas compras do mês e ainda ajudar no orçamento da casa.',
          },
          {
            id: 3,
            name: 'Fone de Ouvido Bluetooth',
            quantity: 2,
            unitPrice: 1200,
            description:
              'Troque seus pontos por um fone de ouvido Bluetooth de alta qualidade, patrocinado por uma marca renomada. Desfrute de suas músicas favoritas com liberdade e conforto.',
          },
          {
            id: 4,
            name: 'Acessório Gamer (Mouse ou Teclado)',
            quantity: 2,
            unitPrice: 2000,
            description:
              'Resgate um mouse ou teclado gamer de última geração, ideal para melhorar seu desempenho nos jogos. Patrocinado por uma das principais marcas de periféricos do mercado.',
          },
        ]}
      />
    </main>
  )
}
