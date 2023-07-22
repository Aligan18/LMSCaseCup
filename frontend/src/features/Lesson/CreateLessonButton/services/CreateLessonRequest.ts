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
import { createListModuleRequest } from 'entities/Module/CreateListModule/services/createListModuleRequest'
import { IListModule } from 'entities/Module/types'
import { EListModuleType, ICreateListModule } from 'entities/Module/types/'

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
>(
	'createLessonRequest',
	async ({ about, contents, additions }, { rejectWithValue, extra, dispatch }) => {
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

			const lectureResponse = await extra.$axios.post<ILectureData>(
				extra.API.lectures.create,
				lectureData,
			)

			if (about.module_id) {
				const listModuelData: ICreateListModule = {
					lecture_id: lectureResponse.data.id,
					module_type: EListModuleType.LECTURE,
					module: about.module_id,
				}
				dispatch(createListModuleRequest(listModuelData))
			} else {
				throw new Error()
			}

			const params: IEDIT_LESSON_Params = {
				module_id: String(about.module_id),
				lesson_id: String(lectureResponse.data.id),
			}
			extra.navigate && extra.navigate(setParamsInPath(ERoutePath.EDIT_LESSON, params))
		} catch (error) {
			return rejectWithValue(serverErrors(error))
		}
	},
)
