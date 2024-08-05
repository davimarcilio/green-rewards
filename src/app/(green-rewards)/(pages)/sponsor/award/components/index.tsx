'use client'
import { AwardCard } from '@/components/cards/award-card'
import { AwardType } from '@/models/award'
import { useAuthStore } from '@/store/auth'

export function SponsorAwards({ allAwards }: { allAwards: AwardType[] }) {
  const { entity } = useAuthStore(({ entity }) => ({ entity }))

  return (
    <article className="grid grid-cols-3 gap-4 p-2">
      {allAwards.map((award) => (
        <AwardCard
          key={award.id}
          description={award.description}
          name={award.name}
          quantity={award.quantity}
          unitPrice={award.unitPrice}
          link={award.link}
          entityType={entity?.type ?? 'PLAYER'}
          id={1}
        />
      ))}
    </article>
  )
}
