import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import {
	IAdditionData,
	ICreateLectureData,
	ICreateLessonAboutData,
	ICreateLessonContentData,
	ILessonContentData,
} from 'entities/Lesson/types'

import { serverErrors } from 'shared/lib'

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

		await extra.$axios.post<ILessonContentData>(extra.API.lectures.create, lectureData)
	} catch (error) {
		return rejectWithValue(serverErrors(error))
	}
})
