'use client'
import { Button, Input, Link } from '@nextui-org/react'
import { ArrowRightIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MultiStep } from '../../components/multi-step'
import { useLocalStorage } from '@uidotdev/usehooks'
const firstFormSchema = z.object({
  username: z
    .string({ required_error: 'Nome de usuário é obrigatório' })
    .min(1, 'Nome de usuário é obrigatório'),
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email({ message: 'Email inválido' }),
})

type FirstFormData = z.infer<typeof firstFormSchema>

interface FirstStepFormProps {
  stepsLength: number
}

export function FirstStepForm({ stepsLength }: FirstStepFormProps) {
  const [, setLocalStorage] = useLocalStorage<FirstFormData>(
    '@green-reward:1.0.0/first-step-form',
  )

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FirstFormData>({
    resolver: zodResolver(firstFormSchema),
  })

  function onSubmit({ email, username }: FirstFormData) {
    setLocalStorage({ email, username })
  }
  //   const [showPassword, setShowPassword] = useState(true)

  //   function changeShowPassword() {
  //     setShowPassword((state) => !state)
  //   }

  return (
    <>
      <div className="px-10">
        <MultiStep currentStep={1} size={stepsLength} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-lg bg-content3 p-5"
      >
        <Input
          isRequired
          {...register('username')}
          size="sm"
          label="Digite seu nome de usuário"
          errorMessage={errors.username?.message}
          isInvalid={!!errors.username?.message}
        />
        <Input
          isRequired
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email?.message}
          {...register('email')}
          size="sm"
          label="Digite seu e-mail"
        />

        <Button
          isLoading={isSubmitting}
          type="submit"
          className="mt-2"
          color="primary"
        >
          <ArrowRightIcon /> Próximo passo
        </Button>
        <Link href="/auth" size="sm">
          Já possui conta?
        </Link>
      </form>
    </>
  )
}
