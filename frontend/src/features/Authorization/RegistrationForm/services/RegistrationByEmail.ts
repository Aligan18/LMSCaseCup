import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { I400Error } from '../model/type/RegistrationFormSchema'

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
	} catch (error) {
		console.log(error)
		switch (error.request.status) {
			case 400: {
				const errorData: I400Error = error.response.data
				let errorMessage: string
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
