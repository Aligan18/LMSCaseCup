import { createSlice } from '@reduxjs/toolkit'

import { createModuleRequest } from '../../services/CreateModuleRequest'
import { ICreateModuleSchema } from '../type/CreateModuleSchema.type'

const initialState: ICreateModuleSchema = {
	isLoading: false,
	successful: false,
}

export const createModuleSlice = createSlice({
	name: 'createModuleSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createModuleRequest.pending, (state: ICreateModuleSchema, action) => {
				state.error = undefined
				state.isLoading = true
				state.successful = false
			})
			.addCase(createModuleRequest.fulfilled, (state: ICreateModuleSchema, action) => {
				state.isLoading = false
				state.successful = true
			})
			.addCase(createModuleRequest.rejected, (state: ICreateModuleSchema, action) => {
				state.error = action.payload
				state.isLoading = false
				state.successful = false
			})
	},
})

export const { actions: createModuleSliceActions } = createModuleSlice
export const { reducer: createModuleSliceReducer } = createModuleSlice
