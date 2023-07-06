import { FormEvent, useState } from 'react'

import classes from './FormConstructor.module.scss'

import { classnames as cn } from 'shared/lib'
import {
	Button,
	CheckBox,
	ErrorText,
	Htag,
	IFormConstructorData,
	Input,
	List,
	SelectOption,
	TextInput,
	UploadFile,
} from 'shared/ui'

export function FormConstructor({ styles, data, errors, onSubmit }: IFormConstructorProps) {
	const [file, setFile] = useState<File>()

	const renderFormItem = (formItem: IConbineFormConstructor) => {
		switch (formItem.type) {
			case 'input':
				return (
					<Input
						format={'large'}
						variation={'clear'}
						{...formItem.register}
					>
						{formItem.title}
					</Input>
				)
			case 'text-input':
				return (
					<TextInput
						styles={classes.text_input}
						{...formItem.register}
					>
						{formItem.title}
					</TextInput>
				)

			case 'selector':
				return (
					<SelectOption
						options={formItem.options}
						{...formItem.register}
					/>
				)

			case 'check-box':
				return (
					<CheckBox
						title={formItem.description}
						{...formItem.register}
					/>
				)

			case 'file-input':
				return (
					<>
						<UploadFile
							setFile={setFile}
							{...formItem.register}
						/>
						<div>{file && `${file.name} - ${file.type}`}</div>
					</>
				)
			default:
				return <></>
		}
	}

	return (
		<form
			onSubmit={onSubmit()}
			className={cn(classes.FormConstructor, [styles])}
		>
			<List
				styles={classes.list}
				variation={'list'}
				items={data}
				renderItem={(formItem: IConbineFormConstructor) => (
					<div
						className={classes.form_item}
						key={formItem.key}
					>
						{formItem.title && <Htag tag={'small'}>{formItem.title}</Htag>}
						{formItem.description && formItem.type !== 'check-box' && (
							<Htag tag={'very-small'}>{formItem.description}</Htag>
						)}
						{renderFormItem(formItem)}
						{errors[formItem.key] && (
							<ErrorText>{errors[formItem.key].message}</ErrorText>
						)}
					</div>
				)}
			/>
			<Button type="submit">Проверить данные </Button>
		</form>
	)
}

interface IFormConstructorProps {
	styles?: string
	data: IFormConstructorData[]
	errors: any
	onSubmit: any
}

interface IConbineFormConstructor extends IFormConstructorData {
	key: string
}
