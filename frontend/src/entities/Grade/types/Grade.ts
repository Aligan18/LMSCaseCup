import { IListModule } from 'entities/Module/types'

export interface IGradeData {
	course: number
	student: number
	attendance: boolean
	grade: number
	module_type: string
	list_modules: IListModule
	module_index: number
}

export interface ICreateAttendance {
	course: number
	student: number
	attendance: boolean
}
