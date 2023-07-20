import { createAsyncThunk } from '@reduxjs/toolkit'

import { ERoutePath } from 'app/providers/AppRouters'
import { IEDIT_LESSON_Params } from 'app/providers/AppRouters/config/routeConfig'
import { IThunkExtraArg } from 'app/providers/StoreProvider'

import {
	IAdditionData,
	ICreateLectureData,
	ICreateLessonAboutData,
	ICreateLessonContentData,
	ILectureData,
	ILessonContentData,
} from 'entities/Lesson/types'

import { serverErrors, setParamsInPath } from 'shared/lib'

interface ICreateLessonProps {
	about: ICreateLessonAboutData
	contents: ICreateLessonContentData[]
	additions: IAdditionData[]
}

export const createLessonRequest = createAsyncThunk<
	void,
	ICreateLessonProps,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createLessonRequest', async ({ about, contents, additions }, { rejectWithValue, extra }) => {
	try {
		const contents_id = []
		for (const content of contents) {
			const response = await extra.$axios.post<ILessonContentData>(
				extra.API.lectures.lesson.create,
				content,
			)
			contents_id.push(response.data.id)
		}

		const additions_id = additions.map((addition) => addition.id)

		const lectureData: ICreateLectureData = {
			...about,
			additions: additions_id,
			lesson: contents_id,
		}

		const response = await extra.$axios.post<ILectureData>(
			extra.API.lectures.create,
			lectureData,
		)
		const params: IEDIT_LESSON_Params = {
			course_id: String(response.data.course),
			lesson_id: String(response.data.id),
		}
		extra.navigate && extra.navigate(setParamsInPath(ERoutePath.EDIT_LESSON, params))
	} catch (error) {
		return rejectWithValue(serverErrors(error))
	}
})
