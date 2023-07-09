import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICreateLessonAboutData } from 'entities/Lesson/types'

const initialState: ICreateLessonAboutData = {
	title: null,
}

export const CreateLessonAboutSlice = createSlice({
	name: 'createLessonAboutSlice',
	initialState: initialState,
	reducers: {
		change_about_lesson: (
			state: ICreateLessonAboutData,
			{ payload }: PayloadAction<ICreateLessonAboutData>,
		) => {
			state.title = payload.title
			state.description = payload.description
			state.video = payload.video ? payload.video : null
		},
	},
})

export const { actions: createLessonAboutActions } = CreateLessonAboutSlice
export const { reducer: createLessonAboutReducer } = CreateLessonAboutSlice
