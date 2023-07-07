import { IConbineFormConstructor } from '../../types/FormConstructor'

export const createIsValidObject = (data: IConbineFormConstructor[]) => {
	const isValidObject: Record<string, boolean> = {}
	data.map((item) => {
		isValidObject[item.key] = false
	})
	return isValidObject
}
