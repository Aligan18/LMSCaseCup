import { createAsyncThunk } from '@reduxjs/toolkit'

import { IGradeData } from '../types'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

export const listGradesForStudent = createAsyncThunk<
	IGradeData[],
	{ studentId: number; courseId: number },
	{ rejectValue: string; extra: IThunkExtraArg }
>('listGradesForStudent', async (inputData, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.get<IGradeData[]>(extra.API.grades.grades_student)
		return response.data
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
