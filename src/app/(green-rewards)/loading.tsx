'use client'
import Lottie from 'lottie-react'
import loading from '@/assets/loading.json'
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie animationData={loading} loop={true} />
    </div>
  )
}
