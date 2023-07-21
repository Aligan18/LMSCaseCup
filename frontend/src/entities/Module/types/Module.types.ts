import { IAboutLessonData } from 'entities/Lesson/types'

import { IFormConstructorData } from 'shared/ui'

export interface IModuleData {
	id: number
	title: string
	description: string
	number: number
	lesson: IAboutLessonData[]
	order: number
}

export interface ICreateModuleData {
	course: number
	title: string
	description: string
	order: number
}

interface ICreateModuleKeys {
	key: keyof ICreateModuleData
}

export interface IModuleFormConstructor extends IFormConstructorData, ICreateModuleKeys {}
