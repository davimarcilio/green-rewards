export const userTypes = ['PLAYER', 'ADMIN'] as const

export type IUserType = (typeof userTypes)[number]

export const corporationTypes = ['INSTITUTION', 'SPONSOR'] as const
export type ICorporationType = (typeof corporationTypes)[number]

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

export interface ICorporation {
  id: number
  addressId: number
  logoId: number
  legalName: string
  businessName: string
  responsibleName: string
  responsibleDocument: string
  totalPoints: number
  email: string
  document: string
  phone: string
  alternativePhone: string
  socialMedia: string
  type: ICorporationType
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  address: IAddress
}

export interface CorporationAuthResponse {
  entity: ICorporation
  refresh: string
  token: string
}
