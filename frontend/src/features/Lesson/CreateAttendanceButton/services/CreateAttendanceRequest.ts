import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { listStudentsGroupRequest } from 'widgets/Student/ListStudentsInGroup/services/ListStudentsGroupRequest'

import { getListGradeData } from 'entities/Grade/models/selectors/getListGradeData'

export const CreateAttendanceRequest = createAsyncThunk<
	void,
	{ course: number; attendance: boolean; list_modules: number; navigate: () => void },
	{ rejectValue: string; extra: IThunkExtraArg }
>(
	'CreateAttendanceRequest',
	async ({ attendance, course, list_modules, navigate }, { extra, rejectWithValue, dispatch }) => {
		try {
			await extra.$axios.post(extra.API.attendance.create, { attendance, course, list_modules })

			navigate()
		} catch (error: any) {
			return rejectWithValue(extra.serverErrors(error))
		}
	},
)
