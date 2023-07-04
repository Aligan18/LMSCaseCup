export interface IAboutLessonData {
	id: number
	title: string
	description: string
	number: number
	status: boolean
}

export interface ILessonData {
	title: string
	video: string
	lesson: ILessonContentData[]
}

export interface ILessonContentData {
	title: string
	type: string
	content: string
}
