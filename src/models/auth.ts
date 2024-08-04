export const userTypes = ['PLAYER', 'ADMIN'] as const

export type IUserType = (typeof userTypes)[number]

export interface IAddress {
  city: string
  complement: string
  createdAt: string
  id: number
  neighborhood: string
  number: string
  postcode: string
  state: string
  street: string
  updatedAt: string
}

export interface IUser {
  addressId: number
  alternativePhone: string
  avatarId: number
  birthDate: string
  createdAt: string
  deletedAt: string
  document: string
  email: string
  id: number
  phone: string
  socialMedia: string
  totalPoints: number
  type: IUserType
  updatedAt: string
  username: string
}

export interface UserAuthResponse {
  entity: IUser
  refresh: string
  token: string
}
