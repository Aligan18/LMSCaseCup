import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ITaskAnswer } from 'entities/Task/types'

export const getTaskAnswerRequest = createAsyncThunk<
	ITaskAnswer,
	{ studentId: number; listModulesId: number },
	{ rejectValue: string; extra: IThunkExtraArg }
>('getTaskAnswerRequest', async ({ listModulesId, studentId }, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.post<ITaskAnswer[]>(extra.API.file_tasks_answer.list+ )
		return response.data[0]
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
