import { Button, Divider, Input, Textarea, Tooltip } from '@nextui-org/react'
import { MultiStep } from '../../../components/multi-step'
import {
  ArrowLeftIcon,
  CheckCheckIcon,
  EyeIcon,
  EyeOffIcon,
} from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import toast from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
const secondFormSchema = z
  .object({
    cep: z
      .string({ required_error: 'CEP é obrigatório' })
      .min(1, 'CEP é obrigatório'),
    state: z
      .string({
        required_error: 'Estado é obrigatório',
      })
      .min(1, 'Estado é obrigatório'),
    city: z
      .string({
        required_error: 'Cidade é obrigatório',
      })
      .min(1, 'Cidade é obrigatório'),
    birthDate: z
      .string({
        required_error: 'Data de nascimento é obrigatório',
      })
      .date('Data de nascimento é obrigatório')
      .transform((val) => dayjs(val).toISOString()),
    document: z
      .string({
        required_error: 'CPF é obrigatório',
      })
      .min(11, 'Digite um CPF válido'),
    observation: z.string().optional(),

    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(8, 'A Senha deve conter no minímo 8 caracteres'),
    confirmPassword: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(8, 'A Senha deve conter no minímo 8 caracteres'),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword
    },
    {
      message: 'As senhas não estão iguais',
      path: ['confirmPassword'],
    },
  )

type SecondFormData = z.infer<typeof secondFormSchema>

export function SecondStepForm() {
  const [firstFormData, setFirstFormData] = useLocalStorage<{
    username: string
    email: string
  } | null>('@green-reward:1.0.0/first-step-form')
  const router = useRouter()
  const [cep, setCep] = useState('')
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<SecondFormData>({
    resolver: zodResolver(secondFormSchema),
  })

  useQuery({
    queryKey: ['cep', cep],
    queryFn: async () => {
      const { data } = await axios.get<{
        cep: string
        state: string
        city: string
        neighborhood: string
        street: string
        service: string
      }>(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      setValue('state', data.state)
      setValue('city', data.city)
      return data
    },
    enabled: cep.length >= 8,
  })

  async function onSubmit({
    cep,
    city,
    observation,
    password,
    state,
    birthDate,
    document,
  }: SecondFormData) {
    try {
      await api.post('/user', {
        ...firstFormData,
        address: {
          postcode: cep,
          city,
          state,
          complement: observation,
        },
        type: 'PLAYER',
        password,
        birthDate,
        document,
      })
      localStorage.removeItem('@green-reward:1.0.0/first-step-form')
      localStorage.removeItem('@green-reward:1.0.0/second-step-form')
      toast.success('Cadastro realizado com sucesso')
      router.push('/auth')
    } catch (error) {
      toast.error('Ocorreu ao realizar cadastro')
    }
  }

  const [showPassword, setShowPassword] = useState(true)

  function changeShowPassword() {
    setShowPassword((state) => !state)
  }

  function handleResetUser() {
    setFirstFormData(null)
  }

  return (
    <>
      <div className="px-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-foreground-500">
              {firstFormData?.username}
            </p>
            <p className="text-xs font-semibold text-foreground-500">
              {firstFormData?.email}
            </p>
          </div>
          <Tooltip showArrow content="Trocar usuário/email">
            <Button onPress={handleResetUser} isIconOnly color="danger">
              <ArrowLeftIcon />
            </Button>
          </Tooltip>
        </div>
        <Divider className="my-2" />
        <MultiStep currentStep={2} size={2} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
      >
        <Input
          {...register('birthDate')}
          type="date"
          errorMessage={errors.birthDate?.message}
          isInvalid={!!errors.birthDate?.message}
          size="sm"
          label="Digite sua data de nascimento"
        />
        <Input
          {...register('document')}
          errorMessage={errors.document?.message}
          isInvalid={!!errors.document?.message}
          size="sm"
          label="Digite seu CPF"
        />
        <Controller
          name="cep"
          control={control}
          render={({ field: { onChange, value, ref, onBlur, name } }) => {
            return (
              <Input
                isRequired
                ref={ref}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                name={name}
                onValueChange={(val) => {
                  setCep(val)
                }}
                size="sm"
                label="Digite o CEP"
                errorMessage={errors.cep?.message}
                isInvalid={!!errors.cep?.message}
              />
            )
          }}
        />
        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, value, ref, onBlur, name } }) => {
            return (
              <Input
                isRequired
                ref={ref}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                name={name}
                errorMessage={errors.state?.message}
                isInvalid={!!errors.state?.message}
                size="sm"
                label="Digite seu Estado"
              />
            )
          }}
        />
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, value, ref, onBlur, name } }) => {
            return (
              <Input
                isRequired
                ref={ref}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                name={name}
                errorMessage={errors.city?.message}
                isInvalid={!!errors.city?.message}
                size="sm"
                label="Digite sua Cidade"
              />
            )
          }}
        />

        <Textarea
          errorMessage={errors.observation?.message}
          isInvalid={!!errors.observation?.message}
          {...register('observation')}
          size="sm"
          label="Complemento"
        />
        <Input
          isRequired
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password?.message}
          {...register('password')}
          size="sm"
          type={showPassword ? 'password' : 'text'}
          label="Digite uma senha"
          endContent={
            <Button
              className="absolute right-0 top-0"
              variant="light"
              size="lg"
              isIconOnly
              onPress={changeShowPassword}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </Button>
          }
        />
        <Input
          isRequired
          errorMessage={errors.confirmPassword?.message}
          isInvalid={!!errors.confirmPassword?.message}
          {...register('confirmPassword')}
          size="sm"
          type={showPassword ? 'password' : 'text'}
          label="Repita a senha"
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
          <CheckCheckIcon /> Finalizar cadastro
        </Button>
      </form>
    </>
  )
}
