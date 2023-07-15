import { IFormConstructorData } from 'shared/ui'

export interface ICreateRegistrationData {
	email: string
	password: string
	confirm_password: string
}

interface ICreateRegistrationKeys {
	key: keyof ICreateRegistrationData
}

export interface IRegistrationFormConstructor
	extends IFormConstructorData,
		ICreateRegistrationKeys {}
