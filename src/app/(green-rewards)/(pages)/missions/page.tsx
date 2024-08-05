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
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
        <MissionCard
          points={500}
          tags={['ajude']}
          title="Nos Ajude"
          corpName="SOS RS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti labore debitis voluptatibus non expedita rerum aut deserunt voluptate enim. Praesentium perspiciatis recusandae facilis. Nostrum ea quasi sapiente quidem incidunt."
        />
      </article>
    </main>
  )
}
