import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { createLessonAboutActions } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionActions } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ILectureData } from 'entities/Lesson/types'
import { ICustomUser } from 'entities/Users/CustomUser'

import { data } from 'shared/ui/VerticalBarChart/VerticalBarChart'

export const getLectureRequest = createAsyncThunk<
	void,
	number,
	{ rejectValue: string; extra: IThunkExtraArg }
>('GetLecture', async (id, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.get<ILectureData>(extra.API.lectures.retrieve + id)
		console.log(response.data)
		dispatch(lessonContentActions.initial_lesson(response.data.lesson))
		//dispatch(createLessonAboutActions.change_about_lesson(about))
		dispatch(createLessonAdditionActions.initial_addition(response.data.additions))
	} catch (error: any) {
		switch (error.request.status) {
			case 400: {
				const errorData = error.response.data
				let errorMessage = ''
				for (const key in errorData) {
					errorMessage = errorData[key]
				}
				return rejectWithValue(errorMessage)
			}
			case 0:
				return rejectWithValue('Сервер не отвечает, попробуйте позже')
			case 401:
				return rejectWithValue('Вы не авторизованы')

			default:
				return rejectWithValue('Что то пошло не так, попробуйте позже')
		}
	}
})
