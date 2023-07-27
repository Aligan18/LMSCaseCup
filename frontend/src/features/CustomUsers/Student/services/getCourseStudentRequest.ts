import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICourseData } from 'entities/Course/types'

import { IPagination } from 'shared/types'

export const getCourseStudentRequest = createAsyncThunk<
	ICourseData[],
	{ studentId: number },
	{ rejectValue: string; extra: IThunkExtraArg }
>('getCourseStudentRequest', async ({ studentId }, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.get<IPagination<ICourseData>>(
			extra.API.course_students.list + `?student=${studentId}`,
		)
		return response.data.results
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
