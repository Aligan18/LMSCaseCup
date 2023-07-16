import { ILoginSchema } from 'features/Authorization/LoginForm'
import { IRegistrationSchema } from 'features/Authorization/RegistrationForm'

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
	registrationForm: IRegistrationSchema
}
