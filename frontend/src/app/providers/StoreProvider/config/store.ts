import { configureStore } from '@reduxjs/toolkit'

import { IStateSchema } from './StateSchema'

import { lessonContentReducer } from 'features/Lesson/CreateLessonContentForm'

export function createReduxStore(initialState?: IStateSchema) {
	return configureStore<IStateSchema>({
		reducer: { createLessonContent: lessonContentReducer },
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
