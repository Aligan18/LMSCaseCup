import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateLoginData, IToken } from 'entities/Authorization/types'
import { ICustomUser, ICustomUserSchema, customUserSliceActions } from 'entities/Users/CustomUser'
import { getUserType } from 'entities/Users/CustomUser/lib/getUserType'
import { IStudentData } from 'entities/Users/Student/types'

import { USER_LOCALSTORAGE_KEY } from 'shared/const'

export const loginByEmail = createAsyncThunk<
	void,
	ICreateLoginData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('login/loginByEmail', async (authData, { rejectWithValue, dispatch, extra }) => {
	try {
		const token = await extra.$axios.post<IToken>(extra.API.auth.jwt.create, authData)

		if (!token.data) {
			throw new Error()
		}

		const customUser = await extra.$axios.get<ICustomUser>(extra.API.auth.users.me)
		if (!customUser.data) {
			throw new Error()
		}
		let userInfo
		switch (customUser.data.type) {
			case '4': {
				const studentInfo = await extra.$axios.get<IStudentData>(
					extra.API.students.id + customUser.data.id,
				)
				userInfo = studentInfo.data
			}
		}

		if (!userInfo) {
			throw new Error()
		}

		dispatch(customUserSliceActions.setToken(token.data))
		dispatch(customUserSliceActions.userType(getUserType(customUser.data.type)))
		dispatch(customUserSliceActions.userInfo(userInfo))
		const localCustomUser: ICustomUserSchema = {
			token: token.data,
			userInfo: userInfo,
			userType: getUserType(customUser.data.type),
		}
		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(localCustomUser))
	} catch (error) {
		console.log(error)
		return rejectWithValue(error.response.data.detail)
	}
})
