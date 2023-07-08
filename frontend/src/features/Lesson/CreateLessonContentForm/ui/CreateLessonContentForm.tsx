import { BaseSyntheticEvent } from 'react'

import classes from './CreateLessonContentForm.module.scss'

import { ICreateLessonContentData, ILessonContentFormConstructor } from 'entities/Lesson/types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateLessonContentForm = ({ styles }: ICreateLessonContentFormProps) => {
	const onSubmit = (formData: ICreateLessonContentData, event: BaseSyntheticEvent) => {
		event.preventDefault()
		console.log(formData)
	}

	const content: ILessonContentFormConstructor[] = [
		{
			title: 'Введите заголовок',
			description: 'Это не обязательное поле',
			key: 'title',
			type: 'input',
			rules: {
				maxLength: 100,
			},
		},
		{
			title: 'Выберите тип контента',
			key: 'type',
			type: 'selector',
			options: [
				{ title: 'Текст', value: 'text' },
				{ title: 'Код', value: 'code' },
			],
			rules: {
				required: true,
			},
		},
		{
			title: 'Введите контент ',
			key: 'content',
			type: 'text-input',
			rules: {
				required: true,
			},
		},
	]

	return (
		<div className={cn(classes.CreateLessonContentForm, [styles])}>
			<FormConstructor
				data={content}
				onSubmit={onSubmit}
				button={'Добавить блок лекции'}
			/>
		</div>
	)
}

interface ICreateLessonContentFormProps {
	styles?: string
}
