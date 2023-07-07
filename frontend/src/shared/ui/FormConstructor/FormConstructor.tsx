import { BaseSyntheticEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

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

export function FormConstructor({
	styles,
	data,

	onSubmit,
}: IFormConstructorProps) {
	const [file, setFile] = useState<File>()
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const rulesConstructor = ({ rules }: IConbineFormConstructor) => {
		if (rules) {
			return {
				required: rules.required && { value: true, message: 'Обязательное поле' },
				maxLength: rules.maxLength && {
					value: rules.maxLength,
					message: `Больше ${rules.maxLength} символов`,
				},
			}
		}
		return {}
	}

	const renderFormItem = (formItem: IConbineFormConstructor) => {
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
					<>
						<UploadFile
							setFile={setFile}
							{...register(formItem.key, rules)}
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
			onSubmit={handleSubmit(onSubmit)}
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
						<div className={classes.form_description}>
							<div>
								{formItem.title && <Htag tag={'small'}>{formItem.title}</Htag>}
								{formItem.description && formItem.type !== 'check-box' && (
									<Htag tag={'very-small'}>{formItem.description}</Htag>
								)}
							</div>
							{errors[formItem.key] && (
								<ErrorText>{String(errors[formItem.key].message)}</ErrorText>
							)}
						</div>

						{renderFormItem(formItem)}
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
	onSubmit: (formData: any, event: BaseSyntheticEvent) => void
}

interface IConbineFormConstructor extends IFormConstructorData {
	key: string
}
