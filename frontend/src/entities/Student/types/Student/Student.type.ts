import { IAboutCourseData } from 'entities/Course/types'

export interface IStudentAboutData {
	id: number
	student: ICustomUser
	name: string
	surname: string
	patronymic: string
	grade: number
}

export interface IStudentData {
	sex: string
	age: number
	country: string
	student: ICustomUser
	name: string
	surname: string
	patronymic: string
	about: string
	university: string
}

interface ICustomUser {
	avatar: string | null
	email: string
	phone: string
	is_active: boolean
}

export interface IOnlyStudentsInGroupData {
	students: IStudentAboutData[]
}
export interface IAboutGroupData {
	course: number
	group_number: number
	start_date: string
	end_date: string
}
