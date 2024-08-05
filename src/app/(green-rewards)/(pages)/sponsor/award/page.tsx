'use client'
import { api } from '@/lib/api'
import { AwardType } from '@/models/award'
import { Button } from '@nextui-org/react'
import { Plus } from 'lucide-react'
import { SponsorAwards } from './components'

const getAllAwards = async () => {
  try {
    const { data } = await api.get<AwardType[]>('award')

    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function page() {
  const allAwards = (await getAllAwards()) ?? []

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
      <SponsorAwards allAwards={allAwards} />
    </main>
  )
}
