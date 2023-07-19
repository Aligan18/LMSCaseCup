import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

import { ILoginSchema } from 'features/Authorization/LoginForm'
import { IRegistrationSchema } from 'features/Authorization/RegistrationForm'
import { ICreateCourseSchema } from 'features/Course/CreateCourseForm'
import { IUpdateCourseSchema } from 'features/Course/EditCourseForm'
import { ICreateAdditionSchema } from 'features/Lesson/CreateLessonAdditionForm'

import { IRetrieveCourseDataSchema } from 'entities/Course/CourseData'
import { ICreateLessonAboutData, ILessonContentData } from 'entities/Lesson/types'
import { ICustomUserSchema } from 'entities/Users/CustomUser'

import { IAPI } from 'shared/api/api'

export interface IStateSchema {
	createLessonContent: ILessonContentData[]
	createLessonAbout: ICreateLessonAboutData
	createLessonAddition: ICreateAdditionSchema
	loginForm: ILoginSchema
	customUser: ICustomUserSchema
	registrationForm: IRegistrationSchema
	createCourseForm: ICreateCourseSchema
	retrieveCourseData: IRetrieveCourseDataSchema
	updateCourseData: IUpdateCourseSchema
}

export interface IThunkExtraArg {
	$axios: AxiosInstance
	navigate?: (to: To, options?: NavigateOptions) => void
	API: IAPI
	serverErrors: (error: any) => string
}
