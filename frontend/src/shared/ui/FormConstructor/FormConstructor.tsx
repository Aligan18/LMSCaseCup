import { ChangeEvent, useState } from 'react'

import classes from './FormConstructor.module.scss'

import { classnames as cn } from 'shared/lib'
import {
	CheckBox,
	Htag,
	IFormConstructorData,
	Input,
	List,
	SelectOption,
	TextInput,
	UploadFile,
} from 'shared/ui'

export const FormConstructor = ({ styles, data }: IFormConstructorProps) => {
	const [file, setFile] = useState<File>()

	const renderFormItem = (formItem: IFormConstructorData) => {
		switch (formItem.type) {
			case 'input':
				return (
					<Input
						format={'large'}
						variation={'clear'}
					>
						{formItem.title}
					</Input>
				)
			case 'text-input':
				return <TextInput>{formItem.title}</TextInput>

			case 'selector':
				return <SelectOption options={formItem.options} />

			case 'check-box':
				return <CheckBox title={formItem.description} />

			case 'file-input':
				return (
					<>
						<UploadFile setFile={setFile} />
						<div>{file && `${file.name} - ${file.type}`}</div>
					</>
				)
			default:
				return <></>
		}
	}

	return (
		<form className={cn(classes.FormConstructor, [styles])}>
			<List
				styles={classes.list}
				variation={'list'}
				items={data}
				renderItem={(formItem: IFormConstructorData) => (
					<div
						className={classes.form_item}
						key={formItem.title}
					>
						{formItem.title && <Htag tag={'small'}>{formItem.title}</Htag>}
						{formItem.description && formItem.type !== 'check-box' && (
							<Htag tag={'very-small'}>{formItem.description}</Htag>
						)}
						{renderFormItem(formItem)}
					</div>
				)}
			/>
		</form>
	)
}

interface IFormConstructorProps {
	styles?: string
	data: IFormConstructorData[]
}
