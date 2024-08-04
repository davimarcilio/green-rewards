import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-10 py-5">
      <div className="mx-auto flex max-w-screen-sm flex-col gap-5 py-20">
        <div className="flex flex-col gap-1 px-8">
          <h1 className="text-2xl font-bold">
            Bem-vindo ao <span className="text-success">Green Reward!</span>
          </h1>
          <p className="text-sm font-semibold text-foreground-700">
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
