import { IFormConstructorData } from 'shared/ui'

export interface ICreateLessonContentData {
	title: string
	type: 'text' | 'code'
	content: string
}

interface ICreateLessonContentKeys {
	key: keyof ICreateLessonContentData
}

export interface ILessonContentFormConstructor
	extends IFormConstructorData,
		ICreateLessonContentKeys {}
