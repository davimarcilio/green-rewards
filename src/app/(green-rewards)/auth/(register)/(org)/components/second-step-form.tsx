import {
  Button,
  Divider,
  Input,
  Link,
  Textarea,
  Tooltip,
} from '@nextui-org/react'
import { MultiStep } from '../../../components/multi-step'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const secondFormSchema = z.object({
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
  neighborhood: z
    .string({
      required_error: 'Bairro é obrigatório',
    })
    .min(1, 'Bairro é obrigatório'),
  street: z
    .string({
      required_error: 'Street é obrigatório',
    })
    .min(1, 'Street é obrigatório'),
  observation: z.string().optional(),

  // password: z
  //   .string({ required_error: 'Senha é obrigatória' })
  //   .min(8, 'A Senha deve conter no minímo 8 caracteres'),
  // confirmPassword: z
  //   .string({ required_error: 'Senha é obrigatória' })
  //   .min(8, 'A Senha deve conter no minímo 8 caracteres'),
})
// .refine(
//   (data) => {
//     return data.password === data.confirmPassword
//   },
//   {
//     message: 'As senhas não estão iguais',
//     path: ['confirmPassword'],
//   },
// )

type SecondFormData = z.infer<typeof secondFormSchema>

export function SecondStepForm() {
  const [firstFormData, setFirstFormData] = useLocalStorage<{
    username: string
    email: string
  } | null>('@green-reward:1.0.0/first-step-form')
  const [, setLocalStorage] = useLocalStorage<SecondFormData>(
    '@green-reward:1.0.0/second-step-form',
  )

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
      setValue('neighborhood', data.neighborhood)
      setValue('street', data.street)
      setValue('city', data.city)
      return data
    },
    enabled: cep.length >= 8,
  })

  function onSubmit({
    cep,
    city,
    observation,
    state,
    neighborhood,
    street,
  }: SecondFormData) {
    setLocalStorage({ cep, city, observation, state, street, neighborhood })
  }

  // const [showPassword, setShowPassword] = useState(true)

  // function changeShowPassword() {
  //   setShowPassword((state) => !state)
  // }

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
        <MultiStep currentStep={2} size={4} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
      >
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
        <Controller
          name="neighborhood"
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
                errorMessage={errors.neighborhood?.message}
                isInvalid={!!errors.neighborhood?.message}
                size="sm"
                label="Digite seu bairro"
              />
            )
          }}
        />
        <Controller
          name="street"
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
                errorMessage={errors.street?.message}
                isInvalid={!!errors.street?.message}
                size="sm"
                label="Digite sua rua"
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

        <Button
          isLoading={isSubmitting}
          type="submit"
          className="mt-2"
          color="primary"
        >
          <ArrowRightIcon /> Próxima etapa
        </Button>
        <Link href="/auth" size="sm">
          Já possui conta?
        </Link>
      </form>
    </>
  )
}
