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
  const { entity } = useAuthStore(({ entity }) => ({ entity }))
  const [value, setValue] = useState('')
  const userEntity = entity as IUser | null
  useEffect(() => {
    if (userEntity) {
      setValue((userEntity[patchKey] as string) ?? '')
    }
  }, [userEntity])
  async function handlePatchUser() {
    try {
      if (userEntity?.[patchKey] === value) {
        return
      }

      await api.patch<IUser>(`/user/${userEntity?.id}`, {
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
