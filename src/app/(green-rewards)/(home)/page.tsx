import { RedirectionForm } from '../components/redirection-form'
import { MissionCard } from './components/missions-card'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="flex max-h-96 w-full max-w-screen-lg gap-8">
        <div className="flex w-1/2 flex-col justify-between rounded-large bg-content3 p-5 shadow-2xl">
          <div className="flex flex-col">
            <h1 className="max-w-64 text-2xl font-bold">
              Jogue, Ajude e Ganhe Recompensas!
            </h1>
          </div>
          <p className="text-base font-semibold text-foreground-700">
            Participe e contribua para um mundo melhor. Complete missões, reduza
            a poluição e apoie boas causas para ser recompensado por suas ações.
            Junte-se a nós e transforme suas boas ações em conquistas valiosas!
          </p>

          <RedirectionForm />
        </div>
        <MissionCard />
      </div>
    </main>
  )
}
