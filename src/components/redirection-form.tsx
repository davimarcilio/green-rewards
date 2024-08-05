'use client'

import { Button, Link, Select, Selection, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RedirectionForm() {
  const router = useRouter()

  const [selectedKey, setSelectedKey] = useState<Selection>(new Set(['player']))

  function handleRedirect() {
    const value = Array.from(selectedKey).at(0)

    router.push(`/auth/${value}`)
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <Select
          className=""
          disallowEmptySelection
          defaultSelectedKeys={['player']}
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          classNames={{
            trigger: 'rounded-md rounded-e-none',
          }}
          label=""
        >
          <SelectItem key={'player'}>Player</SelectItem>
          <SelectItem key={'institution'}>Instituição</SelectItem>
          <SelectItem key={'supporter'}>Apoiador</SelectItem>
        </Select>
        <Button
          onPress={handleRedirect}
          color="primary"
          className="rounded-md rounded-s-none px-8"
        >
          Registrar-se
        </Button>
      </div>
      <Link href="/auth" size="sm">
        Já possui uma conta?
      </Link>
    </div>
  )
}
