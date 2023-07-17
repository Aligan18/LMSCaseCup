import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { createLessonAdditionRequest } from '../../services/CreateLessonAdditionRequest'
import { ICreateAdditionSchema } from '../type/CreateAdditionSchema'

const initialState: ICreateAdditionSchema = {
	isLoading: false,
	additions_data: [],
}

export const CreateLessonAdditionSlice = createSlice({
	name: 'createLessonAdditionSlice',
	initialState: initialState,

	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createLessonAdditionRequest.pending, (state, action) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(createLessonAdditionRequest.fulfilled, (state, action) => {
				state.isLoading = false
				state.additions_data.push(action.payload)
			})
			.addCase(createLessonAdditionRequest.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: createLessonAdditionActions } = CreateLessonAdditionSlice
export const { reducer: createLessonAdditionReducer } = CreateLessonAdditionSlice
