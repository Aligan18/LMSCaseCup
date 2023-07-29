import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { createLessonAboutActions } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionActions } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

import { ILectureData } from 'entities/Lesson/types'

import { serverErrors } from 'shared/lib'

export const getLectureRequest = createAsyncThunk<void, number, { rejectValue: string; extra: IThunkExtraArg }>(
	'GetLecture',
	async (id, { extra, rejectWithValue, dispatch }) => {
		try {
			const response = await extra.$axios.get<ILectureData>(extra.API.lectures.retrieve + id)
			console.log(response.data)
			const { lesson, additions, description, title, video } = response.data
			dispatch(lessonContentActions.initial_lesson(lesson))
			dispatch(createLessonAboutActions.change_about_lesson({ description, title, video }))
			dispatch(createLessonAdditionActions.initial_addition(additions))
		} catch (error: any) {
			return rejectWithValue(serverErrors(error))
		}
	},
)
