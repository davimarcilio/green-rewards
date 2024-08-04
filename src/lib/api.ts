import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(`@green-reward:1.0.0/token`)}`
  return config
})
