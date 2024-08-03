'use client'

import { useLocalStorage } from '@uidotdev/usehooks'
import { FirstStepForm } from './first-step-form'
import { SecondStepForm } from './second-step-form'

export function Form() {
  const [formDataFromLocalStorage] = useLocalStorage<{
    username: string
    email: string
  }>('@green-reward:1.0.0/first-step-form')

  console.log(formDataFromLocalStorage)

  if (!formDataFromLocalStorage) {
    return <FirstStepForm />
  }
  return <SecondStepForm />
}
