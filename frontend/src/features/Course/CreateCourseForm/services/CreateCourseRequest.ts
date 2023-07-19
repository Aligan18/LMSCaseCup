import { createAsyncThunk } from '@reduxjs/toolkit'

import { ERoutePath } from 'app/providers/AppRouters'
import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICourseData, ICreateCourseData } from 'entities/Course/types/Course.types'

import { deleteRouteId, serverErrors } from 'shared/lib'

export const createCourseRequest = createAsyncThunk<
	void,
	ICreateCourseData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createCourseRequest', async (courseData, { extra, rejectWithValue }) => {
	try {
		const response = await extra.$axios.post<ICourseData>(extra.API.course.create, courseData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		extra.navigate && extra.navigate(deleteRouteId(ERoutePath.EDIT_COURSE) + response.data.id)
	} catch (error: any) {
		return rejectWithValue(serverErrors(error))
	}
})
