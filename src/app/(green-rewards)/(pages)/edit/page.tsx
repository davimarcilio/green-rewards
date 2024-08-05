'use client'
import { Tab, Tabs } from '@nextui-org/react'
import { ChangeInformation } from './components/change-information'
import { useAuthStore } from '@/store/auth'

export default function EditUserPage() {
  const { user } = useAuthStore(({ user }) => ({ user }))

  return (
    <div className="mx-auto mt-20 max-w-screen-lg">
      <h1 className="text-2xl font-semibold">
        Olá <span className="text-success"> {user?.username}</span>
      </h1>
      <Tabs color="success" variant="underlined">
        <Tab title="Alterar informações">
          <ChangeInformation />
        </Tab>
      </Tabs>
    </div>
  )
}
