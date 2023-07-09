import { configureStore } from '@reduxjs/toolkit'

import { IStateSchema } from './StateSchema'

import { createLessonAboutReducer } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionReducer } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'

export function createReduxStore(initialState?: IStateSchema) {
	return configureStore<IStateSchema>({
		reducer: {
			createLessonContent: lessonContentReducer,
			createLessonAbout: createLessonAboutReducer,
			createLessonAddition: createLessonAdditionReducer,
		},

		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
