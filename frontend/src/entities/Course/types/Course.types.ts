import { IFormConstructorData } from 'shared/ui'

export interface IAboutCourseData {
	id: number
	title: string
	description: string
	price: number
}

export interface ICreateCourseData {
	image: File
	title: string
	description: string
	course_duration: number
	category: number
}

export type IUpdateCourseData = Partial<ICreateCourseData>

export interface ICourseData {
	id: number
	image: string
	title: string
	time_create: string
	time_update: string
	is_published: boolean
	description: string
	course_duration: number
	category: number
	rating: number
}

interface ICreateCourseKeys {
	key: keyof ICreateCourseData
}

export interface ICourseFormConstructor extends IFormConstructorData, ICreateCourseKeys {}
