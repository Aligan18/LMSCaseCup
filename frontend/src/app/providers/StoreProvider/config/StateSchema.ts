import { ILessonContentSchema } from 'features/Lesson/CreateLessonContentForm'

import { ICreateLessonAboutData } from 'entities/Lesson/types'

export interface IStateSchema {
	createLessonContent: ILessonContentSchema[]
	createLessonAbout: ICreateLessonAboutData
}
