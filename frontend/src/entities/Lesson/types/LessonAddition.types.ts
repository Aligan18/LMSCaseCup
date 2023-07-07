import { IFormConstructorData } from 'shared/ui'

export interface ICreateAdditionData {
	title: string
	file: string
}

interface ICreateLessonAdditionKeys {
	key: keyof ICreateAdditionData
}

export interface ILessonAdditionFormConstructor
	extends IFormConstructorData,
		ICreateLessonAdditionKeys {}
