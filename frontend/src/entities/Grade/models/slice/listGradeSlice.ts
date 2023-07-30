import { createSlice } from '@reduxjs/toolkit'

import { IListGradeSchema } from '../types/ListGradeSchema.type'

import { listGradesForStudent } from 'entities/Grade/services/listGradesForStudent'

const initialState: IListGradeSchema = {
	isLoading: false,
	gradeList: [],
}

export const listGradeSlice = createSlice({
	name: 'listGradeSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(listGradesForStudent.pending, (state: IListGradeSchema, action) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(listGradesForStudent.fulfilled, (state: IListGradeSchema, action) => {
				state.gradeList = action.payload
				state.isLoading = false
			})
			.addCase(listGradesForStudent.rejected, (state: IListGradeSchema, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: listGradeActions } = listGradeSlice
export const { reducer: listGradeReducer } = listGradeSlice
