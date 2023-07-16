import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

import { I400Error } from '../model/type/RegistrationFormSchema'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ICustomUser } from 'entities/Users/CustomUser'

export const registartionByEmail = createAsyncThunk<
	ICustomUser,
	ICreateRegistrationData,
	{ rejectValue: string }
>('hello', async (registrationData, thunkAPI) => {
	try {
		const newUser = await axios.post<ICustomUser>(
			'http://127.0.0.1:8000/auth/users/',
			registrationData,
		)
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
				return thunkAPI.rejectWithValue(errorMessage)
			}
			case 0:
				return thunkAPI.rejectWithValue('Сервер не отвечает попробуйте позже')

			default:
				return thunkAPI.rejectWithValue('Что то пошло не так попробуйте позже')
		}
	}
})
