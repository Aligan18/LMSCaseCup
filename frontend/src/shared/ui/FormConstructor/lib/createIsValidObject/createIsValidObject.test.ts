import { IConbineFormConstructor } from '../../types/FormConstructor'
import { createIsValidObject } from './createIsValidObject'

const data: IConbineFormConstructor[] = [
	{ key: 'title', type: 'check-box' },
	{ key: 'name', type: 'check-box' },
	{ key: 'phone', type: 'check-box' },
]

const result = {
	title: false,
	name: false,
	phone: false,
}
describe('createIsValidObject', () => {
	test('with only first params', () => {
		expect(createIsValidObject(data)).toStrictEqual(result)
	})
})
