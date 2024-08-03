import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-5 px-10 py-24">
      <div className="flex flex-col gap-1 px-8">
        <h1 className="text-2xl font-bold">Green Reward</h1>
        <p className="text-sm font-semibold text-foreground-700">
          Que bom ter você de volta!
        </p>
      </div>
      {children}
    </div>
  )
}
