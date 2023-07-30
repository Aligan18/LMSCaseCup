import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

export const CreateAttendanceRequest = createAsyncThunk<
	void,
	{ course: number; attendance: boolean; list_modules: number },
	{ rejectValue: string; extra: IThunkExtraArg }
>('CreateAttendanceRequest', async (inputData, { extra, rejectWithValue, dispatch }) => {
	try {
		await extra.$axios.post(extra.API.attendance.create, inputData)
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
