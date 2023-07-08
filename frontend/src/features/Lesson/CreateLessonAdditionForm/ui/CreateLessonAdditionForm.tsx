import { BaseSyntheticEvent } from 'react'

import classes from './CreateLessonAdditionForm.module.scss'

import { ICreateAdditionData, ILessonAdditionFormConstructor } from 'entities/Lesson/types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateLessonAdditionForm = ({ styles }: ICreateLessonAdditionFormProps) => {
	const onSubmit = (formData: ICreateAdditionData, event: BaseSyntheticEvent) => {
		event.preventDefault()
		console.log(formData)
	}

	const addition: ILessonAdditionFormConstructor[] = [
		{
			title: 'Название файла',
			key: 'title',
			type: 'input',
			description: 'До 30 символов',
			rules: { required: true, maxLength: 30 },
		},
		{
			key: 'file',
			type: 'file-input',
			rules: { required: true },
		},
	]

	return (
		<div className={cn(classes.CreateLessonAdditionForm, [styles])}>
			<FormConstructor
				button={'Добавить файл'}
				data={addition}
				onSubmit={onSubmit}
			/>
		</div>
	)
}

interface ICreateLessonAdditionFormProps {
	styles?: string
}
