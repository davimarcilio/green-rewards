import { api } from '@/lib/api'
import { IUser } from '@/models/auth'
import { useAuthStore } from '@/store/auth'
import { Button, Input, InputProps } from '@nextui-org/react'
import { CheckCheckIcon, PencilLineIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface PatchInputProps extends InputProps {
  patchKey: keyof IUser
}

export function PatchInput({ patchKey, ...props }: PatchInputProps) {
  const [isEditing, setIsEditing] = useState(false)
  const { user } = useAuthStore(({ user }) => ({ user }))
  const [value, setValue] = useState('')

  useEffect(() => {
    if (user) {
      setValue((user[patchKey] as string) ?? '')
    }
  }, [user])
  async function handlePatchUser() {
    try {
      if (user?.[patchKey] === value) {
        return
      }

      const { data } = await api.patch<IUser>(`/user/${user?.id}`, {
        [patchKey]: value,
      })


      toast.success('Informações salvas com sucesso')
    } catch (error) {
      console.error(error)
      toast.error('Falha ao salvar informações')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        {...props}
        size="sm"
        isDisabled={!isEditing}
        variant="underlined"
        onValueChange={setValue}
        value={value}
      />
      <Button
        onPress={() => {
          if (isEditing) {
            handlePatchUser()
          }
          setIsEditing((state) => !state)
        }}
        variant="flat"
        size="lg"
        color={!isEditing ? 'warning' : 'success'}
        isIconOnly
      >
        {!isEditing ? <PencilLineIcon /> : <CheckCheckIcon />}
      </Button>
    </div>
  )
}
