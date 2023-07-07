import { IOptions } from 'shared/ui'

export interface IConbineFormConstructor extends IFormConstructorData {
	key: string
}

export interface IFormConstructorData {
	type: 'selector' | 'text-input' | 'check-box' | 'input' | 'file-input'
	options?: IOptions[]
	title?: string
	description?: string
	rules?: IRegisterRules
}

interface IRegisterRules {
	required?: boolean
	maxLength?: number
}
