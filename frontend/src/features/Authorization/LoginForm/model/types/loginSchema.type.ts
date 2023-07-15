import { ICreateLoginData } from 'entities/Authorization/types'

export interface ILoginSchema {
	formData: ICreateLoginData
	isLoading: boolean
	error?: string
}
