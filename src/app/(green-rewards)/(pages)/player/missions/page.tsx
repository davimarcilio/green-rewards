import { MissionsCard } from '@/app/(green-rewards)/components/missions-card'

export default function page() {
  return (
    <main className="p-4">
      <article className="grid grid-cols-3 gap-4">
        <MissionsCard />
        <MissionsCard />
        <MissionsCard />
        <MissionsCard />
        <MissionsCard />
        <MissionsCard />
        <MissionsCard />
      </article>
    </main>
  )
}
