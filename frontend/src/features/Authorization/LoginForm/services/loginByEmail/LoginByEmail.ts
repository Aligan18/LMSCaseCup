import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICreateLoginData, IToken } from 'entities/Authorization/types'
import { ICustomUser, customUserSliceActions } from 'entities/Users/CustomUser'
import { getUserType } from 'entities/Users/CustomUser/lib/getUserType'
import { IStudentData } from 'entities/Users/Student/types'

export const loginByEmail = createAsyncThunk<
	ICustomUser,
	ICreateLoginData,
	{ rejectValue: string }
>('login/loginByEmail', async (authData, thunkAPI) => {
	try {
		const token = await axios.post<IToken>('http://127.0.0.1:8000/auth/jwt/create/', authData)
		if (!token.data) {
			throw new Error()
		}
		const customUser = await axios.get<ICustomUser>('http://127.0.0.1:8000/auth/users/me/', {
			headers: { Authorization: `Bearer ${token.data.access}` },
		})
		if (!customUser.data) {
			throw new Error()
		}
		let userInfo
		switch (customUser.data.type) {
			case '4': {
				const studentInfo = await axios.get<IStudentData>(
					'http://127.0.0.1:8000/api/v1/students/id/' + customUser.data.id,
					{
						headers: { Authorization: `Bearer ${token.data.access}` },
					},
				)
				userInfo = studentInfo.data
			}
		}

		if (!userInfo) {
			throw new Error()
		}

		thunkAPI.dispatch(customUserSliceActions.setToken(token.data))
		thunkAPI.dispatch(customUserSliceActions.userType(getUserType(customUser.data.type)))
		thunkAPI.dispatch(customUserSliceActions.userInfo(userInfo))
		return customUser.data
	} catch (error) {
		console.log(error)
		return thunkAPI.rejectWithValue(error.response.data.detail)
	}
})
