import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICreateAdditionData } from 'entities/Lesson/types'

const initialState: ICreateAdditionData[] | undefined[] = []

export const CreateLessonAdditionSlice = createSlice({
	name: 'createLessonAdditionSlice',
	initialState: initialState,

	reducers: {
		add_addition: (
			state: ICreateAdditionData[],
			{ payload }: PayloadAction<ICreateAdditionData>,
		) => {
			state.push(payload)
		},
	},
})

export const { actions: createLessonAdditionActions } = CreateLessonAdditionSlice
export const { reducer: createLessonAdditionReducer } = CreateLessonAdditionSlice
