import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IThunkExtraArg } from 'app/providers/StoreProvider'

import { ICreateRegistrationData } from 'entities/Authorization/types'
import { ICreateTicketData } from 'entities/Ticket/types'
import { ICustomUser } from 'entities/Users/CustomUser'

export const createTicketRequest = createAsyncThunk<
	void,
	ICreateTicketData,
	{ rejectValue: string; extra: IThunkExtraArg }
>('createTicketRequest', async (ticketData, { extra, rejectWithValue, dispatch }) => {
	try {
		const response = await extra.$axios.post(extra.API.ticket.create, ticketData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	} catch (error: any) {
		switch (error.request.status) {
			case 400: {
				const errorData = error.response.data
				let errorMessage = 'Ошибка'
				for (const key in errorData) {
					errorMessage = errorData[key]
				}
				return rejectWithValue(errorMessage)
			}
			case 0:
				return rejectWithValue('Сервер не отвечает, попробуйте позже')

			default:
				return rejectWithValue('Что то пошло не так, попробуйте позже')
		}
	}
})
