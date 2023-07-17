import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICreateLessonAboutData } from 'entities/Lesson/types'

const initialState: ICreateLessonAboutData = {
	title: null,
	description: null,
	video: null,
}

export const CreateLessonAboutSlice = createSlice({
	name: 'createLessonAboutSlice',
	initialState: initialState,
	reducers: {
		change_about_lesson: (
			state: ICreateLessonAboutData,
			{ payload }: PayloadAction<ICreateLessonAboutData>,
		) => {
			state.title = payload.title ? payload.title : null
			state.description = payload.description ? payload.description : null
			state.video = payload.video ? payload.video : null
		},

		delete_field_about_lesson: (
			state: ICreateLessonAboutData,
			{ payload }: PayloadAction<keyof ICreateLessonAboutData>,
		) => {
			switch (payload) {
				case 'title':
					state.title = null
					break
				case 'video':
					state.video = null
					break
				default:
					break
			}
		},
	},
})

export const { actions: createLessonAboutActions } = CreateLessonAboutSlice
export const { reducer: createLessonAboutReducer } = CreateLessonAboutSlice
