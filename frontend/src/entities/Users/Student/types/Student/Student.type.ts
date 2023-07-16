import { IAboutCustomUser, ICustomUser } from 'entities/Users/CustomUser'

export interface IStudentAboutData {
	id: number
	student: IAboutCustomUser
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

export interface IColumnNames extends Record<keyof IStudentAboutData, string | IAboutCustomUser> {
	grade: string
	student: IAboutCustomUser
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
