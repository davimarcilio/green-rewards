import { InstitutionCard } from '../../../../components/cards/institution-card'

export default function page() {
  return (
    <main className="p-4">
      <article className="grid grid-cols-3 gap-4">
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
        <InstitutionCard />
      </article>
    </main>
  )
}
