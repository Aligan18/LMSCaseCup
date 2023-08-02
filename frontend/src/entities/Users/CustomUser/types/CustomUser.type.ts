export interface ICustomUser {
	email: string
	is_active: boolean | string
	type: ICustomUserType
	is_staff: boolean
	id: number
	about: string | null
}

export type ICustomUserType = '4' | '3' | '2' | '1'

export interface IAboutCustomUser {
	avatar: string | null
	email: string
	phone: string
	is_active: boolean | string
	id: number
}
