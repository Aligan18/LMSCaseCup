export interface IAboutLessonData {
	id: number
	title: string
	description: string
	number: number
	status: boolean
}

export interface ILectureData {
	id?: number
	description: string
	number: number
	title: string
	video: string
	lesson: ILessonContentData[]
	additions: IAdditionData[]
}
export interface ICreateLectureData {
	description: string

	title: string
	video: string
	lesson: number[]
	additions: number[]
}

export interface ILessonContentData {
	order: number
	id: number
	title: string
	type: 'text' | 'code'
	content: string
}

export interface IAdditionData {
	id: number
	title: string
	file: string
}
