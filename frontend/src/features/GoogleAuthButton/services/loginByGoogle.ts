import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

export const loginByGoogle = createAsyncThunk<
	void,
	{ state: string; code: string },
	{ rejectValue: string; extra: IThunkExtraArg }
>('loginByGoogle', async ({ state, code }, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.get(extra.API.auth.google.auth + '?state=' + state + '&code=' + code)
		console.log('DATA', response.data)
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
