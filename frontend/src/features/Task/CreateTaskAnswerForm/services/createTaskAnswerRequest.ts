import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateTaskAnswerData } from 'entities/Task/types/Task.types'

export const createTaskAnswerRequest = createAsyncThunk<
	void,
	{ answerData: ICreateTaskAnswerData; props: { courseId: number } },
	{ rejectValue: string; extra: IThunkExtraArg }
>('createTaskAnswerRequest', async ({ answerData, props }, { extra, rejectWithValue, dispatch }) => {
	try {
		await extra.$axios.post(extra.API.file_tasks_answer.create, answerData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
