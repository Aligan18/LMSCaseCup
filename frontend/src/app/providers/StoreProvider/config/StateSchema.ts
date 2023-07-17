import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

import { ERoutePath } from 'app/providers/AppRouters'

import { ILoginSchema } from 'features/Authorization/LoginForm'
import { IRegistrationSchema } from 'features/Authorization/RegistrationForm'
import { ICreateAdditionSchema } from 'features/Lesson/CreateLessonAdditionForm'

import {
	ICreateAdditionData,
	ICreateLessonAboutData,
	ILessonContentData,
} from 'entities/Lesson/types'
import { ICustomUserSchema } from 'entities/Users/CustomUser'

import { IAPI } from 'shared/api/api'

export interface IStateSchema {
	createLessonContent: ILessonContentData[]
	createLessonAbout: ICreateLessonAboutData
	createLessonAddition: ICreateAdditionSchema
	loginForm: ILoginSchema
	customUser: ICustomUserSchema
	registrationForm: IRegistrationSchema
}

export interface IThunkExtraArg {
	$axios: AxiosInstance
	navigate: (to: To, options?: NavigateOptions) => void
	API: IAPI
}
