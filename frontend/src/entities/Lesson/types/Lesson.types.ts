export interface IAboutLessonData {
	id: number
	title: string
	description: string
	number: number
	status: boolean
}

export interface ILessonData {
	id?: number
	description: string
	status: boolean
	number: number
	title: string
	video: string
	lesson: ILessonContentData[]
	additions: IAdditionData[]
}

export interface ILessonContentData {
	id?: number
	title: string
	type: string
	content: string
}

export interface IAdditionData {
	id: number
	title: string
	file: string
}

export interface ICreateLessonData {
	description?: string
	title: string
	video?: string
}
