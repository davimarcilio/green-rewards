import { api } from '@/lib/api'
import { IUser, UserAuthResponse } from '@/models/auth'
import { create } from 'zustand'

export interface AuthStoreState {
  user: IUser | null
  corporation: null
  token: string | null
  refreshToken: string | null
}

export const initialState: AuthStoreState = {
  user: null,
  corporation: null,
  token: null,
  refreshToken: null,
}

export interface AuthStoreAction {
  setStore: (props: Partial<AuthStoreState>) => void
  reloadToken: () => Promise<void>
}

export interface AuthStoreProps extends AuthStoreState, AuthStoreAction {}

export const useAuthStore = create<AuthStoreProps>((set, get) => ({
  ...initialState,
  setStore: (props) => set(props),
  reloadToken: async () => {
    const { setStore } = get()
    const refreshToken = localStorage.getItem(
      '@green-reward:1.0.0/refreshToken',
    )

    if (refreshToken) {
      const { data } = await api.post<UserAuthResponse>('/auth/refresh', {
        refreshToken,
      })
      setStore({
        token: data.token,
        refreshToken: data.refresh,
        user: data.entity,
      })
    }
  },
  logout: () => {
    localStorage.removeItem('@green-reward:1.0.0/token')
    localStorage.removeItem('@green-reward:1.0.0/refreshToken')

    set(initialState)
  },
}))
