import {
  Card,
  CardHeader,
  Divider,
  Tooltip,
  CardBody,
  Textarea,
  CardFooter,
  Button,
} from '@nextui-org/react'
import { BadgeCheckIcon, CoinsIcon } from 'lucide-react'

export function MissionCard() {
  return (
    <Card className="animate-small-bounce border border-warning bg-content3 shadow-2xl">
      <CardHeader className="flex flex-col items-start">
        <div className="relative flex w-full items-center justify-between gap-2">
          <Divider className="flex-1 bg-warning" />
          <h2 className="text-sm font-semibold text-foreground-700">Missão</h2>
          <Divider className="flex-1 bg-warning" />
        </div>
        <Tooltip showArrow placement="top-end" content="Instituição">
          <div className="flex w-full justify-end gap-2">
            <p className="text-xs font-semibold text-foreground-700">
              Green Reward
            </p>
            <Divider orientation="vertical" className="h-full min-h-4" />
            <BadgeCheckIcon size={16} className="text-primary" />
          </div>
        </Tooltip>
      </CardHeader>
      <CardBody className="gap-2 px-5">
        <h3 className="text-center text-lg font-semibold text-foreground-800">
          Mãos à Obra: Melhore o Mundo, Ajude o Próximo
        </h3>
        <Textarea
          isDisabled
          className="opacity-100"
          classNames={{
            input: 'font-medium text-sm text-foreground-600',
          }}
          defaultValue={`Nosso objetivo principal é promover um mundo melhor em todos os aspectos. Com ações focadas em ajudar pessoas necessitadas, incentivar a reciclagem e melhorar a ecologia, buscamos transformar nosso planeta em um lugar mais sustentável e solidário. Junte-se a nós nessa missão e faça parte da mudança positiva que queremos ver no mundo.`}
        />
        <p className="text-sm font-medium"></p>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button color="warning" className="rounded-md font-bold">
          Iniciar missão!
        </Button>
        <Tooltip showArrow content="Recompensa">
          <div className="flex items-center gap-2 rounded-md bg-warning p-1">
            <CoinsIcon className="text-foreground-50" />
            <p className="text-xs font-bold text-foreground-50">1000</p>
          </div>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}
