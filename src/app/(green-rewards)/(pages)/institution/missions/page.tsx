import { MissionCard } from '@/components/mission-card'

export default function MissionsPage() {
  return (
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
    </article>
  )
}
