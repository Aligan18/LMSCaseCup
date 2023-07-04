import { IAboutLessonData } from 'entities/Lesson'

export interface IModuleData {
	id: number
	title: string
	description: string
	number: number
	lesson: IAboutLessonData[]
}
