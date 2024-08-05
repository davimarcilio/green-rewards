import { LoginForm } from './components/login-form'

interface LoginPageProps {
  searchParams: {
    corporation?: string
  }
}

export default function LoginPage({
  searchParams: { corporation },
}: LoginPageProps) {
  return (
    <div className="flex flex-col gap-5">
      <LoginForm isCorporation={corporation ? corporation === 'true' : false} />
    </div>
  )
}
