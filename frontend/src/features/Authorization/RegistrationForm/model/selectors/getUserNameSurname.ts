import { createSelector } from '@reduxjs/toolkit'

import { IStateSchema } from 'app/providers/StoreProvider'

const getName = (state: IStateSchema) => state.registrationForm.name
const getSurname = (state: IStateSchema) => state.registrationForm.surname

export const getUserNameSurname = createSelector(
	getName,
	getSurname,
	(name: string, surname: string) => ({
		name,
		surname,
	}),
)
