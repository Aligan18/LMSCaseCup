import { IOptions } from 'shared/ui'

export interface IFormConstructorData {
	type: 'selector' | 'text-input' | 'check-box' | 'input' | 'file-input'
	options?: IOptions[]
	title?: string
	description?: string
}