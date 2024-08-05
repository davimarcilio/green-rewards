'use client' // temporário para testes de requisição
import { Wallet } from 'lucide-react'
import { RescueAwards } from './components'
import { api } from '@/lib/api'
import { AwardType } from '@/models/award'

export default async function page() {
  const getAllAwards = async () => {
    try {
      const { data } = await api.get<AwardType[]>('/award')
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const allAwards = (await getAllAwards()) ?? []

  return (
    <main className="flex min-h-screen flex-col gap-4 p-4">
      <header className="flex justify-end">
        <span className="flex items-center space-x-1 text-4xl text-green-400">
          <strong>200</strong>
          <Wallet className="text-green-400" size={32} />
        </span>
      </header>
      <RescueAwards allAwards={allAwards} />
    </main>
  )
}
