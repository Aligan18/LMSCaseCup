import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import {
	ICreateListModule,
	ICreateModuleData,
	IListModule,
	IModuleData,
} from 'entities/Module/types'

export const createListModuleRequest = createAsyncThunk<
	void,
	ICreateListModule,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createListModuleRequest', async (listData, { extra, rejectWithValue, dispatch }) => {
	try {
		const listModuleResponse = await extra.$axios.post<IListModule>(
			extra.API.list_modules.create,
			listData,
		)

		const moduleData = await extra.$axios.post<ICreateModuleData>(
			extra.API.modules.retrieve + listData.module,
		)

		moduleData.data.list_modules.push(listModuleResponse.data.id)

		const moduleResponse = await extra.$axios.post<IModuleData>(
			extra.API.modules.update + listData.module,
			moduleData,
		)
		console.log('moduleResponse', moduleResponse.data)
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
