import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateListModule, ICreateModuleData, IListModule, IModuleData } from 'entities/Module/types'

export const createListModuleRequest = createAsyncThunk<
	IModuleData,
	ICreateListModule,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createListModuleRequest', async (listData, { extra, rejectWithValue, dispatch }) => {
	try {
		const listModuleResponse = await extra.$axios.post<IListModule>(extra.API.list_modules.create, listData)

		const moduleData = await extra.$axios.get<ICreateModuleData>(extra.API.modules.rud + listData.module)

		moduleData.data.list_modules.push(listModuleResponse.data.id)
		const moduleUpdateData = moduleData.data.list_modules

		const moduleResponse = await extra.$axios.put<IModuleData>(extra.API.modules.rud + listData.module, {
			list_modules: moduleUpdateData,
		})

		extra.navigate && extra.navigate(-1)
		return moduleResponse.data
	} catch (error: any) {
		return rejectWithValue(extra.serverErrors(error))
	}
})
