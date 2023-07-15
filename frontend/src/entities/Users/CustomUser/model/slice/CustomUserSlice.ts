import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICustomUserSchema } from '../types/CustomUserSchema'

import { IToken } from 'entities/Authorization/types'
import { IStudentData } from 'entities/Users/Student/types'

const initialState: ICustomUserSchema = {
	token: { access: '', refresh: '' },
	userInfo: {
		about: '',
		age: null,
		country: null,
		name: null,
		patronymic: null,
		sex: null,
		student: null,
		surname: null,
		university: null,
	},
	userType: null,
}

export const CustomUserSlice = createSlice({
	name: 'customUserSlice',
	initialState: initialState,
	reducers: {
		setToken: (state: ICustomUserSchema, { payload }: PayloadAction<IToken>) => {
			state.token.access = payload.access
			state.token.refresh = payload.refresh
		},
		userType: (
			state: ICustomUserSchema,
			{ payload }: PayloadAction<'student' | 'teacher' | 'admin' | 'super-admin'>,
		) => {
			state.userType = payload
		},
		userInfo: (state: ICustomUserSchema, { payload }: PayloadAction<IStudentData>) => {
			state.userInfo.about = payload.about
			state.userInfo.age = payload.age
			state.userInfo.country = payload.country
			state.userInfo.name = payload.name
			state.userInfo.patronymic = payload.patronymic
			state.userInfo.sex = payload.sex
			state.userInfo.student = payload.student
			state.userInfo.surname = payload.surname
			state.userInfo.university = payload.university
		},
	},
})

export const { actions: customUserSliceActions } = CustomUserSlice
export const { reducer: customUserSliceReducer } = CustomUserSlice
