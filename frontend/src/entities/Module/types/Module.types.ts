import { IListModule } from './ListModule.types'

import { IAboutLessonData, ILectureData } from 'entities/Lesson/types'

import { IFormConstructorData } from 'shared/ui'

export interface IModuleData {
	id: number
	title: string
	description: string
	number: number
	list_modules: IListModule[]
	order: number
}

export interface ICreateModuleData {
	course: number
	title: string
	description: string
	order: number
	list_modules: number[]
}

interface ICreateModuleKeys {
	key: keyof ICreateModuleData
}

export interface IModuleFormConstructor extends IFormConstructorData, ICreateModuleKeys {}
