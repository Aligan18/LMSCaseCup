import {
	ICreateAdditionData,
	ICreateLessonAboutData,
	ILessonContentData,
} from 'entities/Lesson/types'

export interface IStateSchema {
	createLessonContent: ILessonContentData[]
	createLessonAbout: ICreateLessonAboutData
	createLessonAddition: ICreateAdditionData[]
}
