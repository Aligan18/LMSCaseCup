import debounce from 'debounce'
import { Dispatch, SetStateAction, useState } from 'react'
import { Controller } from 'react-hook-form'

import { rulesConstructor } from '../../lib/rulesConstructor/rulesConstructor'
import { IConbineFormConstructor } from '../../types/FormConstructor'
import classes from './RenderFormItem.module.scss'

import { CheckBox, Input, SelectOption, TextInput, UploadFile } from 'shared/ui'

export const RenderFormItem = ({ formItem, control, register, getValues }: IRenderFormProps) => {
	const [file, setFile] = useState<string>()
	const rules = rulesConstructor(formItem)

	switch (formItem.type) {
		case 'input':
			return (
				<Input
					format={'large'}
					variation={'clear'}
					{...register(formItem.key, rules)}
				>
					{formItem.title}
				</Input>
			)
		case 'text-input':
			return (
				<TextInput
					styles={classes.text_input}
					{...register(formItem.key, rules)}
				>
					{formItem.title}
				</TextInput>
			)

		case 'selector':
			return (
				<Controller
					name={formItem.key}
					control={control}
					rules={rules}
					render={({ field }) => (
						<SelectOption
							{...field}
							options={formItem.options}
						/>
					)}
				/>
			)

		case 'check-box':
			return (
				<CheckBox
					title={formItem.description}
					{...register(formItem.key, rules)}
				/>
			)

		case 'file-input':
			return (
				<div className={classes.upload}>
					<UploadFile
						{...register(formItem.key, {
							...rules,
							onChange: () => {
								const value = getValues(formItem.key)

								value[0] && setFile(value[0].name)
							},
						})}
					/>
					<div className={classes.file_name}>{file && file}</div>
				</div>
			)
		default:
			return <></>
	}
}

interface IRenderFormProps {
	formItem: IConbineFormConstructor
	control: any
	register: any
	getValues: any
}
