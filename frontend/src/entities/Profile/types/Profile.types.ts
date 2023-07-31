import { IFormConstructorData } from 'shared/ui'

export interface ICreateProfileData {
	avatar: File
	surname: string
	name: string
	patronymic: string
	phone: string
	about: string
	sex: string
	age: number
	country: string
	university: string
}

interface ICreateProfileKeys {
	key: keyof ICreateProfileData
}

export interface IProfileFormConstructor extends IFormConstructorData, ICreateProfileKeys {}
