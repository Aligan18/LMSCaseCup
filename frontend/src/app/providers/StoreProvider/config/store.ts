import { configureStore } from '@reduxjs/toolkit'

import { IStateSchema } from './StateSchema'

import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'

export function createReduxStore(initialState?: IStateSchema) {
	return configureStore<IStateSchema>({
		reducer: {
			createLessonContent: lessonContentReducer,
			createLessonAbout: createLessonAboutReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
