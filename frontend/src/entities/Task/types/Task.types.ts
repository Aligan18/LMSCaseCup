import { IFormConstructorData } from 'shared/ui'

export interface ICreateTaskData {
	title: string
	description: string
	file: File
}

interface ICreateTaskKeys {
	key: keyof ICreateTaskData
}

export interface ITaskFormConstructor extends IFormConstructorData, ICreateTaskKeys {}

export interface ICreateTaskAnswerData {
	title: string
	description: string
	file: File
}

interface ICreateTaskAnswerKeys {
	key: keyof ICreateTaskAnswerData
}

export interface ITaskFormConstructor extends IFormConstructorData, ICreateTaskAnswerKeys {}
