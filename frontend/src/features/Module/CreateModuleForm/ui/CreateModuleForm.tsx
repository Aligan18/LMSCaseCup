import { SubmitHandler } from 'react-hook-form'

import classes from './CreateModuleForm.module.scss'

import { ICreateModuleData, IModuleFormConstructor } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { Button, FormConstructor, Header } from 'shared/ui'

export const CreateModuleForm = ({ styles }: ICreateModuleFormProps) => {
	const onSubmit: SubmitHandler<ICreateModuleData> = (formData: ICreateModuleData, event) => {
		event?.preventDefault()

		console.log(formData)
	}

	const form: IModuleFormConstructor[] = [
		{
			key: 'title',
			title: 'Название модуля',
			type: 'input',
			rules: {
				required: true,
				maxLength: 35,
			},
		},
		{
			key: 'description',
			title: 'Описание модуля',
			type: 'text-input',
			rules: {
				required: true,
				maxLength: 120,
			},
		},
	]

	return (
		<div className={cn(classes.CreateModuleForm, [styles])}>
			<Header
				styles={classes.header}
				title="Добавить модуль"
				buttons={<Button>Сохранить изменения</Button>}
			></Header>
			<FormConstructor<ICreateModuleData>
				button={'Добавить модуль'}
				data={form}
				onSubmit={onSubmit}
			/>
		</div>
	)
}

interface ICreateModuleFormProps {
	styles?: string
}
