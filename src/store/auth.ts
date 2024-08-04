import { api } from '@/lib/api'
import {
  CorporationAuthResponse,
  ICorporation,
  IUser,
  UserAuthResponse,
} from '@/models/auth'
import { create } from 'zustand'

export interface AuthStoreState {
  user: IUser | null
  corporation: ICorporation | null
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
  logout: () => void
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
      const { data } = await api.post<
        UserAuthResponse | CorporationAuthResponse
      >('/auth/refresh', {
        token: refreshToken,
      })
      if (data.entity.type === 'PLAYER' || data.entity.type === 'ADMIN') {
        setStore({
          token: data.token,
          refreshToken: data.refresh,
          user: data.entity,
        })
      }
      if (
        data.entity.type === 'INSTITUTION' ||
        data.entity.type === 'SPONSOR'
      ) {
        setStore({
          token: data.token,
          refreshToken: data.refresh,
          corporation: data.entity,
        })
      }
    }
  },
  logout: () => {
    localStorage.removeItem('@green-reward:1.0.0/token')
    localStorage.removeItem('@green-reward:1.0.0/refreshToken')

    set(initialState)
  },
}))
