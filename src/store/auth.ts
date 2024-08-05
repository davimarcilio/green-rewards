import { api } from '@/lib/api'
import {
  CorporationAuthResponse,
  ICorporation,
  IUser,
  UserAuthResponse,
} from '@/models/auth'
import toast from 'react-hot-toast'
import { create } from 'zustand'

export interface AuthStoreState {
  entity: IUser | ICorporation | null
  token: string | null
  refreshToken: string | null
}

export const initialState: AuthStoreState = {
  entity: null,
  token: null,
  refreshToken: null,
}

export interface AuthStoreAction {
  setStore: (props: Partial<AuthStoreState>) => void
  reloadToken: () => Promise<void>
  logout: () => void
}

export interface AuthStoreProps extends AuthStoreState, AuthStoreAction {}

export const useAuthStore = create<AuthStoreProps>((set, get) => ({
  ...initialState,
  setStore: (props) => set(props),
  reloadToken: async () => {
    const { setStore, logout } = get()
    try {
      const refreshToken = localStorage.getItem(
        '@green-reward:1.0.0/refreshToken',
      )

      if (refreshToken) {
        const { data } = await api.post<
          UserAuthResponse | CorporationAuthResponse
        >('/auth/refresh', {
          token: refreshToken,
        })
        setStore({
          token: data.token,
          refreshToken: data.refresh,
          entity: data.entity,
        })
        localStorage.setItem('@green-reward:1.0.0/token', data.token)
        localStorage.setItem('@green-reward:1.0.0/refreshToken', data.refresh)
      }
    } catch (error) {
      console.error(error)
      logout()
      toast.error('Sessão expirada')
    }
  },
  logout: () => {
    localStorage.removeItem('@green-reward:1.0.0/token')
    localStorage.removeItem('@green-reward:1.0.0/refreshToken')

    set(initialState)
  },
}))
