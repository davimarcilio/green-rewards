'use client'
import { api } from '@/lib/api'
import { AwardType } from '@/models/award'
import { Button, Link, Tooltip } from '@nextui-org/react'
import { BadgeCheckIcon, Coins, LinkIcon, Trash2, Trophy } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

type AwardCardType = AwardType & {
  entityType: string
}

export function AwardCard({
  description,
  link,
  name,
  quantity,
  unitPrice,
  entityType,
  id,
}: AwardCardType) {
  const [isLoadingRescue, setIsLoadingRescue] = useState(false)
  const [isLoadingDeleteAward, setIsLoadingDeleteAward] = useState(false)

  async function handleAwardRescue(awardId: number) {
    try {
      setIsLoadingRescue(true)
      const { data } = await api.patch(`/award/${awardId}/rescue`)
      toast.success('Prêmio resgatado com sucesso!')
      return data
    } catch (error) {
      toast.error('Falha ao resgatar prêmio.')
      console.log(error)
    } finally {
      setIsLoadingRescue(true)
    }
  }

  async function handleDeleteAward(awardId: number) {
    try {
      setIsLoadingDeleteAward(true)
      const { data } = await api.delete(`/award/${awardId}`)
      toast.success('Prêmio excluído com sucesso!')
      return data
    } catch (error) {
      toast.error('Falha ao excluir prêmio.')
      console.log(error)
    } finally {
      setIsLoadingDeleteAward(false)
    }
  }

  return (
    <main className="flex h-fit w-full flex-col space-y-6 rounded-md bg-content3 p-4">
      <header className="flex items-center justify-between">
        <article className="flex items-center justify-center space-x-2 rounded-md bg-content3 p-2">
          <Trophy className="text-warning" />
          <strong className="text-lg font-bold">
            {name.length > 30 ? name.substring(0, 15) : name}
          </strong>
        </article>
        <span className="flex space-x-1 text-xl text-green-400">
          <strong>{unitPrice}</strong>
          <Coins className="text-green-400" />
        </span>
      </header>

      <p>{description}</p>

      <span className="text-center text-4xl font-bold">{`${quantity}x`}</span>
      <footer className="flex flex-col space-y-4 py-2">
        <Button
          color="primary"
          radius="sm"
          startContent={<LinkIcon />}
          isDisabled={!link}
          as={Link}
          href={link}
          target="_blank"
        >
          Acessar Link
        </Button>
        <Button
          color="primary"
          radius="sm"
          onPress={() => handleAwardRescue(id)}
          isLoading={isLoadingRescue}
        >
          Resgatar
        </Button>

        <article className="flex h-12 w-full items-center justify-end space-x-2">
          <div className="flex items-center space-x-2">
            <strong className="font-bold">Americanas</strong>
            <BadgeCheckIcon className="fill-primary text-white" />
          </div>
          {entityType === 'SPONSOR' && (
            <Tooltip content="Deletar premiação">
              <Button
                isIconOnly
                color="danger"
                size="sm"
                radius="sm"
                onPress={() => handleDeleteAward(id)}
                isLoading={isLoadingDeleteAward}
              >
                <Trash2 />
              </Button>
            </Tooltip>
          )}
        </article>
      </footer>
    </main>
  )
}
