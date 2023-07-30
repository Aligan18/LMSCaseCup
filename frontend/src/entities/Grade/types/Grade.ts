export interface IGradeData {
	course: number
	student: number
	attendance: boolean
	grade: number
	module_type: string
	list_modules: number
}

export interface ICreateAttendance {
	course: number
	student: number
	attendance: boolean
}
