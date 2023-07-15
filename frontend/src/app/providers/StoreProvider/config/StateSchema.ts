import { ILoginSchema } from 'features/Authorization/LoginForm'

import {
	ICreateAdditionData,
	ICreateLessonAboutData,
	ILessonContentData,
} from 'entities/Lesson/types'
import { ICustomUserSchema } from 'entities/Users/CustomUser'

export interface IStateSchema {
	createLessonContent: ILessonContentData[]
	createLessonAbout: ICreateLessonAboutData
	createLessonAddition: ICreateAdditionData[]
	loginForm: ILoginSchema
	customUser: ICustomUserSchema
}
