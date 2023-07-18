import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateCourseData } from 'entities/Course/types/Course.types'

export const createCourseRequest = createAsyncThunk<
	void,
	ICreateCourseData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createCourseRequest', async (courseData, { extra, rejectWithValue }) => {
	try {
		const response = await extra.$axios.post(extra.API.course.create, courseData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	} catch (error: any) {
		switch (error.request.status) {
			case 400: {
				const errorData = error.response.data
				let errorMessage = 'Ошибка'
				for (const key in errorData) {
					errorMessage = errorData[key]
				}
				return rejectWithValue(errorMessage)
			}
			case 0:
				return rejectWithValue('Сервер не отвечает попробуйте позже')

			default:
				return rejectWithValue('Что то пошло не так попробуйте позже')
		}
	}
})
