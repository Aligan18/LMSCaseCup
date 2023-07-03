import { ILessonData } from 'entities/Module/'

export interface IModuleData {
	id: number
	title: string
	description: string
	number: number
	lesson: ILessonData[]
}
