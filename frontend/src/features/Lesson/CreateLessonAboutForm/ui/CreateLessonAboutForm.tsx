import { SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { createLessonAboutActions, createLessonAboutReducer } from '../model/slice/CreateLessonAboutSlice'
import classes from './CreateLessonAboutForm.module.scss'

import { ICreateLessonAboutData, ILessonAboutFormConstructor } from 'entities/Lesson/types'

import { DynamicModuleLoader, classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateLessonAboutForm = ({ styles }: ICreateLessonAboutFormProps) => {
	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<ICreateLessonAboutData> = (formData: ICreateLessonAboutData, event) => {
		event?.preventDefault()
		console.log(formData)
		dispatch(createLessonAboutActions.change_about_lesson(formData))
	}

	const description: ILessonAboutFormConstructor[] = [
		{
			title: 'Название урока',
			description: 'До 50 символов',
			key: 'title',
			type: 'input',
			rules: {
				required: true,
				maxLength: 50,
			},
		},
		{
			title: 'Описание урока',
			description: 'До 80 символов',
			key: 'description',
			type: 'text-input',
			rules: {
				required: true,
				maxLength: 80,
			},
		},
		{
			title: 'Видео урока',
			description: 'Введите ссылку на YouTube',
			key: 'video',
			type: 'input',
		},
	]

	return (
		<div className={cn(classes.CreateLessonForm, [styles])}>
			<FormConstructor
				data={description}
				onSubmit={onSubmit}
				button={'Применить описание'}
			/>
		</div>
	)
}

interface ICreateLessonAboutFormProps {
	styles?: string
}
