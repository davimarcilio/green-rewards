import { RescueCard } from '@/components/cards/rescue-card'
import { Wallet } from 'lucide-react'

export default function page() {
  return (
    <div className="p-4">
      <header className="flex justify-end">
        <span className="flex items-center space-x-1 text-4xl text-green-400">
          <strong>200</strong>
          <Wallet className="text-green-400" size={32} />
        </span>
      </header>
      <article className="grid grid-cols-4 gap-4 p-2">
        <RescueCard />
        <RescueCard />
        <RescueCard />
        <RescueCard />
      </article>
    </div>
  )
}
