import { configureStore } from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router-dom'

import { IStateSchema } from './StateSchema'

import { loginSliceReducer } from 'features/Authorization/LoginForm'
import { registrationFormSliceReducer } from 'features/Authorization/RegistrationForm'
import { createCourseReducer } from 'features/Course/CreateCourseForm'
import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionReducer } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'

import { customUserSliceReducer } from 'entities/Users/CustomUser'

import { $api, API } from 'shared/api'

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
					},
				},
			}),
	})
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
