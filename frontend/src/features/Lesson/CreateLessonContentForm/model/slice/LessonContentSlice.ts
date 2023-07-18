import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ILessonContentData } from 'entities/Lesson/types'

const initialState: Array<ILessonContentData | undefined> = []

export const LessonContentSlice = createSlice({
	name: 'lessonContentSlice',
	initialState: initialState,
	reducers: {
		delete_content: (
			state: Array<ILessonContentData | undefined>,
			{ payload }: PayloadAction<ILessonContentData>,
		) => {
			if (state.length !== 0) {
				const index = state.findIndex((content) => content?.id === payload.id)
				state.splice(index, 1)
			}
		},
		add_content: (
			state: Array<ILessonContentData | undefined>,
			{ payload }: PayloadAction<ILessonContentData>,
		) => {
			state.push(payload)
		},
		change_sort_content: (
			state: Array<ILessonContentData | undefined>,
			{ payload }: PayloadAction<ILessonContentData[]>,
		) => {
			const sortedPayload = payload.sort((a: ILessonContentData, b: ILessonContentData) => {
				if (a.order > b.order) {
					return 1
				} else {
					return -1
				}
			})

			// Очистка текущего состояния state
			state.splice(0, state.length)

			// Добавление отсортированных элементов в состояние state
			sortedPayload.forEach((item: ILessonContentData) => {
				state.push(item)
			})
		},
	},
})

export const { actions: lessonContentActions } = LessonContentSlice
export const { reducer: lessonContentReducer } = LessonContentSlice
