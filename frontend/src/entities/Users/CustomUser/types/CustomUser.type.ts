export interface ICustomUser {
	avatar: string | null
	email: string
	phone: string
	is_active: boolean | string
	login: string
	type: ICustomUserType
	is_staff: false
	id: number
}

export type ICustomUserType = '4' | '3' | '2' | '1'

export interface IAboutCustomUser {
	avatar: string | null
	email: string
	phone: string
	is_active: boolean | string
	id: number
}
