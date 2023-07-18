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
	sex: string | null
	age: number | null
	country: string | null
	student: ICustomUser | null
	name: string
	surname: string
	patronymic: string | null
	about: string | null
	university: string | null
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
