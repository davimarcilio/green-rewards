'use client'
import Lottie from 'lottie-react'
import loading from '@/assets/loading.json'
export default function Loading() {
  return (
    <div className="items-center] flex flex-col justify-center">
      <Lottie animationData={loading} loop={true} />
    </div>
  )
}
