import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ICustomUser } from 'entities/Users/CustomUser'

import { serverErrors } from 'shared/lib'

export const registartionByEmail = createAsyncThunk<
	ICustomUser,
	ICreateRegistrationData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('hello', async (registrationData, { extra, rejectWithValue }) => {
	try {
		const newUser = await axios.post<ICustomUser>(extra.API.auth.users.create, registrationData)
		return newUser.data
	} catch (error: any) {
		return rejectWithValue(serverErrors(error))
	}
})
