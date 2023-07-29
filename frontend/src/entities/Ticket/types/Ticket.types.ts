import { IFormConstructorData } from 'shared/ui'

export interface IAboutTicketData {
	id: number
	date: Date
	title: string
	completed: boolean
	student: string
}

export interface ITicketData {
	id: number
	description: string
	answer: string
	file: string
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

export interface ICreateTicketAnswerData {
	answer: string
	completed: boolean
}

interface ICreateTicketAnswerKeys {
	key: keyof ICreateTicketAnswerData
}

export interface ITicketAnswerFormConstructor extends IFormConstructorData, ICreateTicketAnswerKeys {}
