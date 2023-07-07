import { IFormConstructorData } from 'shared/ui'

export interface IAboutCourseData {
	id: number
	title: string
	description: string
	price: number
}

export interface ICreateCourseData {
	title: string
	description: string
	course_duration: string
	category: string
}

interface ICreateCourseKeys {
	key: keyof ICreateCourseData
}

export interface ICourseFormConstructor extends IFormConstructorData, ICreateCourseKeys {}
