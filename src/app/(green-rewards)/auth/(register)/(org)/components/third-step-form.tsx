import { Button, Divider, Input, Link, Tooltip } from '@nextui-org/react'
import { MultiStep } from '../../../components/multi-step'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLocalStorage } from '@uidotdev/usehooks'
const thirdFormSchema = z.object({
  legalName: z
    .string({ required_error: 'Razão social é obrigatório' })
    .min(1, 'Razão social é obrigatório'),

  document: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório',
    })
    .min(1, 'CPF/CNPJ é obrigatório'),
  phone: z
    .string({
      required_error: 'Telefone é obrigatório',
    })
    .min(1, 'Telefone é obrigatório')
    .refine(
      (val) =>
        val.match('^s*(d{2}|d{0})[-. ]?(d{5}|d{4})[-. ]?(d{4})[-. ]?s*$'),
      { message: 'Telefone inválido' },
    ),
})

type ThirdFormData = z.infer<typeof thirdFormSchema>

export function ThirdStepForm() {
  const [secondFormData, setSecondFormData] = useLocalStorage<{
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    observation: string
  } | null>('@green-reward:1.0.0/second-step-form')
  const [, setLocalStorage] = useLocalStorage<ThirdFormData>(
    '@green-reward:1.0.0/third-step-form',
  )
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ThirdFormData>({
    resolver: zodResolver(thirdFormSchema),
  })

  function onSubmit({ document, legalName, phone }: ThirdFormData) {
    setLocalStorage({ document, legalName, phone })
  }

  function handleResetAddress() {
    setSecondFormData(null)
  }

  return (
    <>
      <div className="px-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-foreground-500">
              Endereço: {secondFormData?.cep}, {secondFormData?.state},{' '}
              {secondFormData?.neighborhood}
            </p>
            <p className="text-xs font-semibold text-foreground-500">{}</p>
            <p className="text-xs font-semibold text-foreground-500">{}</p>
          </div>
          <Tooltip showArrow content="Trocar endereço">
            <Button onPress={handleResetAddress} isIconOnly color="danger">
              <ArrowLeftIcon />
            </Button>
          </Tooltip>
        </div>
        <Divider className="my-2" />
        <MultiStep currentStep={3} size={4} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
      >
        <Input
          isRequired
          {...register('legalName')}
          errorMessage={errors.legalName?.message}
          isInvalid={!!errors.legalName?.message}
          size="sm"
          label="Digite sua razão social"
        />
        <Input
          isRequired
          {...register('document')}
          errorMessage={errors.document?.message}
          isInvalid={!!errors.document?.message}
          size="sm"
          label="Digite seu CPF/CNPJ"
        />
        <Input
          isRequired
          {...register('phone')}
          errorMessage={errors.phone?.message}
          isInvalid={!!errors.phone?.message}
          size="sm"
          label="Digite seu telefone"
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
