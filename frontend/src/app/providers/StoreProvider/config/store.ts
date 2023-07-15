import { configureStore } from '@reduxjs/toolkit'

import { IStateSchema } from './StateSchema'

import { loginSliceReducer } from 'features/Authorization/LoginForm'
import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionReducer } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'

import { customUserSliceReducer } from 'entities/Users/CustomUser'

export function createReduxStore(initialState?: IStateSchema) {
	return configureStore<IStateSchema>({
		reducer: {
			createLessonContent: lessonContentReducer,
			createLessonAbout: createLessonAboutReducer,
			createLessonAddition: createLessonAdditionReducer,
			loginForm: loginSliceReducer,
			customUser: customUserSliceReducer,
		},

		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}

const store = createReduxStore()
export type AppDispatch = typeof store.dispatch
