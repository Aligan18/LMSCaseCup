import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ILectureData } from 'entities/Lesson/types'
import { ICustomUser } from 'entities/Users/CustomUser'

import { serverErrors } from 'shared/lib'

export const getLectureRequest = createAsyncThunk<
	void,
	number,
	{ rejectValue: string; extra: IThunkExtraArg }
>('GetLecture', async (id, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.get<ILectureData>(extra.API.lectures.retrieve + id)
		console.log(response.data)
	} catch (error: any) {
		return rejectWithValue(serverErrors(error))
	}
})
