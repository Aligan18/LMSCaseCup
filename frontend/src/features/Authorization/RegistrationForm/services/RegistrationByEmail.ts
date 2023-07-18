import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ICustomUser } from 'entities/Users/CustomUser'

export const registartionByEmail = createAsyncThunk<
	ICustomUser,
	ICreateRegistrationData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('hello', async (registrationData, { extra, rejectWithValue }) => {
	try {
		const newUser = await axios.post<ICustomUser>(extra.API.auth.users.create, registrationData)
		return newUser.data
	} catch (error: any) {
		switch (error.request.status) {
			case 400: {
				const errorData = error.response.data
				let errorMessage = ''
				for (const key in errorData) {
					errorMessage = errorData[key]
				}
				return rejectWithValue(errorMessage)
			}
			case 0:
				return rejectWithValue('Сервер не отвечает попробуйте позже')
			case 401:
				return rejectWithValue('Вы не авторизованы')

			default:
				return rejectWithValue('Что то пошло не так попробуйте позже')
		}
	}
})
