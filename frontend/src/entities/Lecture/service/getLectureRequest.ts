import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { createLessonAboutActions } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionActions } from 'features/Lesson/CreateLessonAdditionForm'
import { lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ILectureData } from 'entities/Lesson/types'
import { ICustomUser } from 'entities/Users/CustomUser'
import { serverErrors } from 'shared/lib'

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
		return rejectWithValue(serverErrors(error))
	}
})
