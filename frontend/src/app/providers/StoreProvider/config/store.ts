import { configureStore } from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router-dom'

import { IStateSchema } from './StateSchema'

import { loginSliceReducer } from 'features/Authorization/LoginForm'
import { registrationFormSliceReducer } from 'features/Authorization/RegistrationForm'
import { createCourseReducer } from 'features/Course/CreateCourseForm'
import { UpdateCourseReducer } from 'features/Course/EditCourseForm'
import { updateCourseRequest } from 'features/Course/EditCourseForm/services/UpdateCourseRequest'
import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionReducer } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'
import { CreateTicketReducer } from 'features/Ticket/CreateTicketForm'

import { retrieveCourseDataReducer } from 'entities/Course/CourseData'
import { customUserSliceReducer } from 'entities/Users/CustomUser'

import { $api, API } from 'shared/api'
import { serverErrors } from 'shared/lib'

export function createReduxStore(
	initialState?: IStateSchema,
	navigate?: (to: To, options?: NavigateOptions) => void,
) {
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
