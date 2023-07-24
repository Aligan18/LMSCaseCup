import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateFunction } from 'react-router-dom'

import { ILoginSchema } from 'features/Authorization/LoginForm'
import { IRegistrationSchema } from 'features/Authorization/RegistrationForm'
import { ICreateCourseSchema } from 'features/Course/CreateCourseForm'
import { IUpdateCourseSchema } from 'features/Course/EditCourseForm'
import { ICreateAdditionSchema } from 'features/Lesson/CreateLessonAdditionForm'
import { ICreateLessonSchema } from 'features/Lesson/CreateLessonButton'
import { ILessonContentScheme } from 'features/Lesson/CreateLessonContentForm'
import { ICreateModuleSchema } from 'features/Module/CreateModuleForm'
import { IEditModuleSchema } from 'features/Module/EditModuleList'
import { ICreateTicketSchema } from 'features/Ticket/CreateTicketForm/model/type/CreateTicketSchema'

import { IListCourseDataSchema, IRetrieveCourseDataSchema } from 'entities/Course/CourseData'
import { ICreateLessonAboutData } from 'entities/Lesson/types'
import { IAllModuleDataSchema } from 'entities/Module/ModuleData'
import { ICustomUserSchema } from 'entities/Users/CustomUser'

import { IAPI } from 'shared/api/api'

export interface IStateSchema {
	customUser: ICustomUserSchema
	listCourseData: IListCourseDataSchema
	getAllModules: IAllModuleDataSchema
	retrieveCourseData: IRetrieveCourseDataSchema
	createLessonContent: ILessonContentScheme
	createLessonAbout: ICreateLessonAboutData
	createLessonAddition: ICreateAdditionSchema

	//Асинхронные редьюсеры
	loginForm?: ILoginSchema

	registrationForm?: IRegistrationSchema
	createCourseForm?: ICreateCourseSchema
	createTicketForm?: ICreateTicketSchema
	updateCourseData?: IUpdateCourseSchema
	createLesson?: ICreateLessonSchema
	createModuleData?: ICreateModuleSchema
	editModuleList?: IEditModuleSchema
}

export interface IThunkExtraArg {
	$axios: AxiosInstance
	navigate?: NavigateFunction
	API: IAPI
	serverErrors: (error: any) => string
}

export type IStateSchemaKey = keyof IStateSchema

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<IStateSchema>
	reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
	add: (key: IStateSchemaKey, reducer: Reducer) => void
	remove: (key: IStateSchemaKey) => void
}

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
	reducerManager: IReducerManager
}
