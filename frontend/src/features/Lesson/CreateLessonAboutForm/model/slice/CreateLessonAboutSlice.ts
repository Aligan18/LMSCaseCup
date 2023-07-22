import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICreateLessonAboutData } from 'entities/Lesson/types'

const initialState: ICreateLessonAboutData = {
	title: '',
	description: '',
	video: undefined,
	module_id: -1,
}

export const CreateLessonAboutSlice = createSlice({
	name: 'createLessonAboutSlice',
	initialState: initialState,
	reducers: {
		change_about_lesson: (state: ICreateLessonAboutData, { payload }: PayloadAction<ICreateLessonAboutData>) => {
			state.title = payload.title ? payload.title : ''
			state.description = payload.description ? payload.description : ''
			state.video = payload.video ? payload.video : undefined
		},

		delete_field_about_lesson: (
			state: ICreateLessonAboutData,
			{ payload }: PayloadAction<keyof ICreateLessonAboutData>,
		) => {
			switch (payload) {
				case 'title':
					state.title = ''
					break
				case 'video':
					state.video = ''
					break
				default:
					break
			}
		},
	},
})

export const { actions: createLessonAboutActions } = CreateLessonAboutSlice
export const { reducer: createLessonAboutReducer } = CreateLessonAboutSlice
