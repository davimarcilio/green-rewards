import { Button, Divider, Input, Link, Tooltip } from '@nextui-org/react'
import { MultiStep } from '../../../components/multi-step'
import {
  ArrowLeftIcon,
  CheckCheckIcon,
  EyeIcon,
  EyeOffIcon,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useState } from 'react'
const fourthFormSchema = z
  .object({
    businessName: z
      .string({ required_error: 'Nome da organização é obrigatório' })
      .min(1, 'Nome da organização é obrigatório'),

    responsibleDocument: z
      .string({
        required_error: 'CPF/CNPJ é obrigatório',
      })
      .min(1, 'CPF/CNPJ é obrigatório'),
    responsibleName: z
      .string({
        required_error: 'Nome é obrigatório',
      })
      .min(1, 'Nome é obrigatório'),
    responsiblePhone: z
      .string({
        required_error: 'Telefone é obrigatório',
      })
      .min(1, 'Telefone é obrigatório')
      .refine(
        (val) =>
          val.match('^s*(d{2}|d{0})[-. ]?(d{5}|d{4})[-. ]?(d{4})[-. ]?s*$'),
        { message: 'Telefone inválido' },
      ),
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

type FourthFormData = z.infer<typeof fourthFormSchema>

interface FourthStepFormProps {
  orgType: string
}
export function FourthStepForm({ orgType }: FourthStepFormProps) {
  const [thirdFormData, setThirdFormData] = useLocalStorage<{
    legalName: string
  } | null>('@green-reward:1.0.0/third-step-form')

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FourthFormData>({
    resolver: zodResolver(fourthFormSchema),
  })

  function onSubmit({
    businessName,
    responsibleDocument,
    responsibleName,
    responsiblePhone,
  }: FourthFormData) {}

  const [showPassword, setShowPassword] = useState(true)

  function changeShowPassword() {
    setShowPassword((state) => !state)
  }

  function handleResetOrgInfo() {
    setThirdFormData(null)
  }

  return (
    <>
      <div className="px-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-foreground-500">
              {thirdFormData?.legalName}
            </p>
            <p className="text-xs font-semibold text-foreground-500">{}</p>
            <p className="text-xs font-semibold text-foreground-500">{}</p>
          </div>
          <Tooltip showArrow content="Trocar endereço">
            <Button onPress={handleResetOrgInfo} isIconOnly color="danger">
              <ArrowLeftIcon />
            </Button>
          </Tooltip>
        </div>
        <Divider className="my-2" />
        <MultiStep currentStep={4} size={4} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
      >
        <Input
          isRequired
          {...register('businessName')}
          errorMessage={errors.businessName?.message}
          isInvalid={!!errors.businessName?.message}
          size="sm"
          label="Digite o nome da sua organização"
        />
        <Input
          isRequired
          {...register('responsibleName')}
          errorMessage={errors.responsibleName?.message}
          isInvalid={!!errors.responsibleName?.message}
          size="sm"
          label="Digite o nome do sócio"
        />
        <Input
          isRequired
          {...register('responsibleDocument')}
          errorMessage={errors.responsibleDocument?.message}
          isInvalid={!!errors.responsibleDocument?.message}
          size="sm"
          label="Digite o CPF do sócio"
        />
        <Input
          isRequired
          {...register('responsiblePhone')}
          errorMessage={errors.responsiblePhone?.message}
          isInvalid={!!errors.responsiblePhone?.message}
          size="sm"
          label="Digite o telefone do sócio"
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
        <Link href="/auth" size="sm">
          Já possui conta?
        </Link>
      </form>
    </>
  )
}
