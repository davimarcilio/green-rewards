'use client'

import { useLocalStorage } from '@uidotdev/usehooks'
import { SecondStepForm } from './second-step-form'
import { ThirdStepForm } from './third-step-form'
import { FourthStepForm } from './fourth-step-form'
import { FirstStepForm } from '../../components/first-step-form'

interface FormProps {
  orgType: string
}

export function Form({ orgType }: FormProps) {
  const [firstFormDataFromLocalStorage] = useLocalStorage<unknown>(
    '@green-reward:1.0.0/first-step-form',
  )
  const [secondFormDataFromLocalStorage] = useLocalStorage<unknown>(
    '@green-reward:1.0.0/second-step-form',
  )
  const [thirdFormDataFromLocalStorage] = useLocalStorage<unknown>(
    '@green-reward:1.0.0/third-step-form',
  )

  if (!firstFormDataFromLocalStorage) {
    return <FirstStepForm stepsLength={4} />
  }

  if (!secondFormDataFromLocalStorage) {
    return <SecondStepForm />
  }

  if (!thirdFormDataFromLocalStorage) {
    return <ThirdStepForm />
  }

  return <FourthStepForm orgType={orgType} />
}
