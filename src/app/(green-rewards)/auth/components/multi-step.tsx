interface MultiStepProps {
  size: number
  currentStep?: number
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div>
      <p className="text-xs text-foreground-500">
        Passo {currentStep} de {size}
      </p>
      <div
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
        className="mt-1 grid gap-2"
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              className="h-1 rounded-sm bg-default-200 data-[active=true]:bg-default-700"
              key={step}
              data-active={currentStep >= step}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
