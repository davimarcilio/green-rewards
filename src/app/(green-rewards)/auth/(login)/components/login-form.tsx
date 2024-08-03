'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { EyeIcon, EyeOffIcon, LogInIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email({ message: 'Email inválido' }),

  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(8, 'A Senha deve conter no minímo 8 caracteres'),
})

type FormData = z.infer<typeof formSchema>
export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit({ email, password }: FormData) {}

  const [showPassword, setShowPassword] = useState(false)

  function changeShowPassword() {
    setShowPassword((state) => !state)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
    >
      <Input
        isRequired
        {...register('email')}
        size="sm"
        label="Digite seu Email/CPF/CNPJ"
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email?.message}
      />
      <Input
        isRequired
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password?.message}
        {...register('password')}
        size="sm"
        type={showPassword ? 'password' : 'text'}
        label="Digite sua senha"
        endContent={
          <Button
            onPress={changeShowPassword}
            className="absolute right-0 top-0"
            variant="light"
            size="lg"
            isIconOnly
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        }
      />
      <Button
        isLoading={isSubmitting}
        type="submit"
        className="mt-2"
        color="primary"
      >
        <LogInIcon /> Acessar plataforma
      </Button>
    </form>
  )
}
