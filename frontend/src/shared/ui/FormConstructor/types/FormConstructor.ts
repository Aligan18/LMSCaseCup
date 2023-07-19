import { FieldValues, Validate } from 'react-hook-form'

import { IOptions } from 'shared/ui'

export interface IConbineFormConstructor<T> extends IFormConstructorData {
	key: keyof T
}

export interface IFormConstructorData {
	type: 'selector' | 'text-input' | 'check-box' | 'input' | 'file-input'
	options?: IOptions[]
	title?: string
	description?: string
	rules?: IRegisterRules
	defaultValue?: string | number
}

export interface IRegisterRules {
	required?: boolean
	maxLength?: number
	pattern?: 'email'
	minLength?: number
	validate?: string
}
