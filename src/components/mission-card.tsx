import {
  Card,
  CardHeader,
  Divider,
  Tooltip,
  CardBody,
  Textarea,
  CardFooter,
  Button,
  Chip,
} from '@nextui-org/react'
import { BadgeCheckIcon, CoinsIcon } from 'lucide-react'

interface MissionCardProps {
  corpName: string
  title: string
  description: string
  points: number
  isAnimated?: boolean
  tags: string[]
}

export function MissionCard({
  corpName,
  description,
  points,
  tags,
  isAnimated = false,
  title,
}: MissionCardProps) {
  return (
    <Card
      data-animated={isAnimated}
      className="border border-success bg-content3 shadow-2xl data-[animated=true]:animate-small-bounce"
    >
      <CardHeader className="flex flex-col items-start">
        <div className="relative flex w-full items-center justify-between gap-2">
          <Divider className="flex-1 bg-success" />
          <h2 className="text-sm font-semibold text-foreground-700">Missão</h2>
          <Divider className="flex-1 bg-success" />
        </div>
        <Tooltip showArrow placement="top-end" content="Instituição">
          <div className="flex w-full justify-end gap-2">
            <p className="text-xs font-semibold text-foreground-700">
              {corpName}
            </p>
            <Divider orientation="vertical" className="h-full min-h-4" />
            <BadgeCheckIcon size={16} className="text-primary" />
          </div>
        </Tooltip>
      </CardHeader>
      <CardBody className="gap-2 px-5">
        <h3 className="text-center text-lg font-semibold text-foreground-800">
          {title}
        </h3>
        <Textarea
          isDisabled
          className="opacity-100"
          classNames={{
            input: 'font-medium text-sm text-foreground-600',
          }}
          defaultValue={description}
        />
        <p className="text-sm font-medium"></p>
      </CardBody>
      <CardFooter className="flex w-full flex-col items-start justify-start gap-1">
        {tags.map((tag) => (
          <Chip key={tag} size="sm" color="primary" variant="dot">
            {tag}
          </Chip>
        ))}
        <div className="flex w-full justify-between">
          <Button color="success" className="rounded-md font-bold">
            Iniciar missão!
          </Button>
          <Tooltip showArrow content="Recompensa">
            <div className="flex items-center gap-2 rounded-md bg-warning p-1">
              <CoinsIcon className="text-foreground-50" />
              <p className="text-xs font-bold text-foreground-50">{points}</p>
            </div>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  )
}
