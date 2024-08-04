'use client'

import { api } from '@/lib/api'
import { UserAuthResponse } from '@/models/auth'
import { useAuthStore } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { EyeIcon, EyeOffIcon, LogInIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
const formSchema = z.object({
  login: z
    .string({
      required_error: 'Login é obrigatório',
    })
    .min(1, 'Login é obrigatório'),

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

  const { setStore } = useAuthStore(({ setStore }) => ({ setStore }))
  const router = useRouter()

  async function onSubmit({ login, password }: FormData) {
    try {
      const { data } = await api.post<UserAuthResponse>('/auth/login', {
        login,
        password,
      })

      setStore({
        token: data.token,
        refreshToken: data.refresh,
        user: data.entity,
      })

      localStorage.setItem('@green-reward:1.0.0/token', data.token)
      localStorage.setItem('@green-reward:1.0.0/refreshToken', data.refresh)

      toast.success('Login realizado com sucesso')

      router.push('/player/missions')
    } catch (error) {
      console.error(error)

      toast.error('Falha ao realizar login')
    }
  }

  const [showPassword, setShowPassword] = useState(true)

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
        {...register('login')}
        size="sm"
        label="Digite seu Email/CPF/CNPJ"
        errorMessage={errors.login?.message}
        isInvalid={!!errors.login?.message}
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
