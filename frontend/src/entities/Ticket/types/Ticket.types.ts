import { IFormConstructorData } from 'shared/ui'

export interface IAboutTicketData {
	id: number
	date: Date
	title: string
	completed: boolean
	student: string
}

export interface ICreateTicketData {
	title: string
	theme: string
	description: string
	file: File
}

interface ICreateTicketKeys {
	key: keyof ICreateTicketData
}

export interface ITicketFormConstructor extends IFormConstructorData, ICreateTicketKeys {}
