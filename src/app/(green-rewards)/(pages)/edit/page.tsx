'use client'
import { Tab, Tabs } from '@nextui-org/react'
import { ChangeInformation } from './components/change-information'
import { useAuthStore } from '@/store/auth'
import { ICorporation, IUser } from '@/models/auth'

export default function EditPage() {
  const { entity } = useAuthStore(({ entity }) => ({ entity }))

  const entityUser = entity as IUser | null
  const entityCorporation = entity as ICorporation | null

  return (
    <div className="mx-auto mt-20 max-w-screen-lg">
      <h1 className="text-2xl font-semibold">
        Olá{' '}
        <span className="text-success">
          {entityUser?.username ?? entityCorporation?.businessName}
        </span>
      </h1>
      <Tabs color="success" variant="underlined">
        <Tab title="Alterar informações">
          <ChangeInformation />
        </Tab>
      </Tabs>
    </div>
  )
}
