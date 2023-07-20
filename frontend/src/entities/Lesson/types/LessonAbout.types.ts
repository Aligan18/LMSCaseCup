import { IFormConstructorData } from 'shared/ui'

export interface ICreateLessonAboutData {
	course?: string
	description: string
	title: string
	video?: string
}

interface ICreateLessonAboutKeys {
	key: keyof ICreateLessonAboutData
}

export interface ILessonAboutFormConstructor extends IFormConstructorData, ICreateLessonAboutKeys {}
