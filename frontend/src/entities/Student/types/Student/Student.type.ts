import { IAboutCourseData } from 'entities/Course/types'

export interface IStudentAboutData {
	id: number
	avatar: string | null
	email: string
	name: string
	surname: string
	patronymic: string
	phone: string
	is_active: boolean
	grade: number
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
