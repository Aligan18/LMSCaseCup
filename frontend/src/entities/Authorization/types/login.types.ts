import { IFormConstructorData } from 'shared/ui'

export interface ICreateLoginData {
	email: string
	password: string
}

interface ICreateLoginKeys {
	key: keyof ICreateLoginData | 'rememberMe'
}

export interface ILoginFormConstructor extends IFormConstructorData, ICreateLoginKeys {}
