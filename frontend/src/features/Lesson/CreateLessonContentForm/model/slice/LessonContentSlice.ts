import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ILessonContentSchema } from '../types/LessonContentSchema'

const initialState: ILessonContentSchema[] | undefined[] = []
export const LessonContentSlice = createSlice({
	name: 'lessonContentSlice',
	initialState: initialState,
	reducers: {
		add_content: (
			state: ILessonContentSchema[],
			{ payload }: PayloadAction<ILessonContentSchema>,
		) => {
			state.push(payload)
		},
		change_sort_content: (
			state: ILessonContentSchema[],
			{ payload }: PayloadAction<ILessonContentSchema[]>,
		) => {
			const sortedPayload = payload.sort(
				(a: ILessonContentSchema, b: ILessonContentSchema) => {
					if (a.order > b.order) {
						return 1
					} else {
						return -1
					}
				},
			)

			// Очистка текущего состояния state
			state.splice(0, state.length)

			// Добавление отсортированных элементов в состояние state
			sortedPayload.forEach((item: ILessonContentSchema) => {
				state.push(item)
			})
		},
	},
})

export const { actions: lessonContentActions } = LessonContentSlice
export const { reducer: lessonContentReducer } = LessonContentSlice
