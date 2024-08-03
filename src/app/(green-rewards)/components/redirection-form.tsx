'use client'

import { Button, Select, SelectItem } from '@nextui-org/react'

export function RedirectionForm() {
  return (
    <div className="flex">
      <Select
        className=""
        disallowEmptySelection
        defaultSelectedKeys={['player']}
        classNames={{
          trigger: 'rounded-md rounded-e-none',
        }}
        label=""
      >
        <SelectItem key={'player'}>Player</SelectItem>
        <SelectItem key={'institution'}>Instituição</SelectItem>
        <SelectItem key={'supporter'}>Apoiador</SelectItem>
      </Select>
      <Button color="primary" className="rounded-md rounded-s-none px-8">
        Acessar plataforma
      </Button>
    </div>
  )
}
