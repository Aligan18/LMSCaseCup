import { createSlice } from '@reduxjs/toolkit'

import { retrieveTaskRequest } from '../../services/retrieveTaskRequest'
import { IRetrieveTaskSchema } from '../type/retrieveTaskSchema.type'

const initialState: IRetrieveTaskSchema = {
	isLoading: false,
	taskData: null,
	taskAnswerData: null,
}

export const retrieveTaskSlice = createSlice({
	name: 'retrieveTaskSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(retrieveTaskRequest.pending, (state: IRetrieveTaskSchema, action) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(retrieveTaskRequest.fulfilled, (state: IRetrieveTaskSchema, action) => {
				state.taskData = action.payload
				state.isLoading = false
			})
			.addCase(retrieveTaskRequest.rejected, (state: IRetrieveTaskSchema, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: retrieveTaskActions } = retrieveTaskSlice
export const { reducer: retrieveTaskReducer } = retrieveTaskSlice
