import { createSlice } from '@reduxjs/toolkit'

import { ILessonContentSchema } from '../types/LessonContentSchema'

const initialState: ILessonContentSchema[] | undefined[] = []
export const LessonContentSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		add_content: (state, payload) => {
			state.push(payload.payload)
		},
		decrement: (state) => {
			state
		},
	},
})

export const { actions: lessonContentActions } = LessonContentSlice
export const { reducer: lessonContentReducer } = LessonContentSlice
