import { ILessonData } from 'widgets/CourseProgram'

export interface IModuleData {
	id: number
	title: string
	description: string
	number: number
	lesson: ILessonData[]
}
