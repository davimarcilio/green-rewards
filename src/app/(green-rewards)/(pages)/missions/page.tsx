'use client'
import { MissionCard } from '@/components/mission-card'
import { api } from '@/lib/api'
import { IMission } from '@/models/mission'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../loading'

export default function MissionsPage() {
  const { data, isFetching } = useQuery({
    queryKey: ['missions'],
    queryFn: async () => {
      const { data } = await api.get<IMission[]>('/mission')

      return data
    },
  })

  console.log(data)

  if (isFetching) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <main className="p-4">
      <article className="grid grid-cols-3 gap-4">
        <MissionCard
          points={100}
          tags={['Parque', 'Limpeza']}
          title="Limpeza de Parque Local"
          corpName="Parques Limpos"
          description="Participe de uma iniciativa de limpeza em um parque da sua cidade. Recolha lixo, separe recicláveis e ajude a manter o espaço verde e limpo."
        />
        <MissionCard
          points={150}
          tags={['Árvores']}
          title="Plantio de Árvores"
          corpName="Árvores pelo mundo"
          description="Plante uma árvore em um local apropriado ou participe de um evento de plantio comunitário. Contribua para um ambiente mais saudável e sustentável."
        />
        <MissionCard
          points={120}
          tags={['Animais']}
          title="Apoio a Abrigo de Animais"
          corpName="Abrigo de animais"
          description="Doe alimentos, brinquedos ou tempo voluntário em um abrigo de animais. Ajude a melhorar a vida dos animais que aguardam por adoção."
        />
        <MissionCard
          points={90}
          tags={['Energia']}
          title="Economia de Energia"
          corpName="SOS RS"
          description="Reduza seu consumo de energia durante uma semana. Desligue aparelhos quando não estiverem em uso, use lâmpadas de baixo consumo e aproveite a luz natural."
        />
        <MissionCard
          points={130}
          tags={['Situação de Rua']}
          title="Auxílio a Pessoas em Situação de Rua"
          corpName="Sem Teto"
          description="Participe de uma campanha de doação de roupas, alimentos ou itens de higiene para pessoas em situação de rua. Faça a diferença na vida de quem mais precisa."
        />
      </article>
    </main>
  )
}
