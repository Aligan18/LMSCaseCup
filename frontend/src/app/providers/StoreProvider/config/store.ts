import { configureStore } from '@reduxjs/toolkit'
import { NavigateFunction, NavigateOptions, To } from 'react-router-dom'

import { IStateSchema } from './StateSchema'

import { loginSliceReducer } from 'features/Authorization/LoginForm'
import { registrationFormSliceReducer } from 'features/Authorization/RegistrationForm'
import { createCourseReducer } from 'features/Course/CreateCourseForm'
import { UpdateCourseReducer } from 'features/Course/EditCourseForm'
import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionReducer } from 'features/Lesson/CreateLessonAdditionForm'
import { createLessonSliceReducer } from 'features/Lesson/CreateLessonButton'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'
import { createModuleSliceReducer } from 'features/Module/CreateModuleForm'
import { editModuleSliceReducer } from 'features/Module/EditModuleList'
import { CreateTicketReducer } from 'features/Ticket/CreateTicketForm'

import { listCourseDataReducer, retrieveCourseDataReducer } from 'entities/Course/CourseData'
import { allModuleDataReducer } from 'entities/Module/ModuleData'
import { customUserSliceReducer } from 'entities/Users/CustomUser'

import { $api, API } from 'shared/api'
import { serverErrors } from 'shared/lib'

export function createReduxStore(initialState?: IStateSchema, navigate?: NavigateFunction) {
	return configureStore({
		reducer: {
			createLessonContent: lessonContentReducer,
			createLessonAbout: createLessonAboutReducer,
			createLessonAddition: createLessonAdditionReducer,
			loginForm: loginSliceReducer,
			customUser: customUserSliceReducer,
			registrationForm: registrationFormSliceReducer,
			createCourseForm: createCourseReducer,
			createTicketForm: CreateTicketReducer,
			retrieveCourseData: retrieveCourseDataReducer,
			updateCourseData: UpdateCourseReducer,
			createLesson: createLessonSliceReducer,
			listCourseData: listCourseDataReducer,
			createModuleData: createModuleSliceReducer,
			getAllModules: allModuleDataReducer,
			editModuleList: editModuleSliceReducer,
		},

		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						$axios: $api,
						API: API,
						navigate: navigate,
						serverErrors: serverErrors,
					},
				},
			}),
	})
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
