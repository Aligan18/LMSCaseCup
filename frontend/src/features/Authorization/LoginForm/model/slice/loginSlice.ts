import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { loginByEmail } from '../../services/loginByEmail/LoginByEmail'
import { ILoginSchema } from '../types/loginSchema.type'

const initialState: ILoginSchema = {
	isLoading: false,
	formData: { email: '', password: '', rememberMe: false },
}

export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: initialState,
	reducers: {
		setEmail: (state: ILoginSchema, { payload }: PayloadAction<string>) => {
			state.formData.email = payload
		},
		setPassword: (state: ILoginSchema, { payload }: PayloadAction<string>) => {
			state.formData.password = payload
		},
		setRememberMe: (state: ILoginSchema, { payload }: PayloadAction<boolean>) => {
			state.formData.rememberMe = payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.pending, (state: ILoginSchema, action) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(loginByEmail.fulfilled, (state: ILoginSchema, action) => {
				state.isLoading = false
			})
			.addCase(loginByEmail.rejected, (state: ILoginSchema, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: loginSliceActions } = loginSlice
export const { reducer: loginSliceReducer } = loginSlice
