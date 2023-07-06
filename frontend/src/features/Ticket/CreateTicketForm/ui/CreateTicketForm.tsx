import { BaseSyntheticEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateTicketForm.module.scss'

import { ICreateTicketData, ITicketFormConstructor } from 'entities/Ticket'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateTicketForm = ({ styles }: ICreateTicketFormProps) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ICreateTicketData>()
	const { t } = useTranslation('ticket')

	const onSubmit = () => {
		return handleSubmit((formData: ICreateTicketData, event: BaseSyntheticEvent) => {
			event.preventDefault()
			console.log(formData)
		})
	}

	const data: ITicketFormConstructor[] = [
		{
			type: 'input',
			title: `${t('nazvanie')}`,
      description: `${t('do-20-simvolov')}`,
			key: 'title',
			register: {
				...register('title', {
					required: { value: true, message: 'Заполните название' },
					maxLength: { value: 20, message: 'Название больше 20 символов' },
				}),
			},

		},
		{
			type: 'selector',
			options: [
				{ title: 'Смена обучения', value: '1' },
				{ title: 'Смена обуч', value: '2' },
				{ title: 'Смена ', value: '3' },
			],
			title: 'Тема обращение',
			key: 'theme',
			register: {
				...register('theme', {
					required: { value: true, message: 'выберите тему обращения' },
				}),
			},
		},
		{
			type: 'input',
			title: 'Описание тикета',
			description: 'До 80 символов',
			key: 'description',
			register: {
				...register('description', {
					required: { value: true, message: 'Заполните описание тикета' },
					maxLength: { value: 80, message: 'Описание тикета больше 80 символов' },
				}),
			},
		},

		{
			type: 'file-input',
			key: 'file',
			register: {
				...register('file', {
					required: { value: true, message: 'Выберите файл' },
				}),
			},
		},
	]
	return (
		<div className={cn(classes.CreateTicketForm, [styles])}>
			<FormConstructor
				onSubmit={onSubmit}
				errors={errors}
				data={data}
			/>
		</div>
	)
}

interface ICreateTicketFormProps {
	styles?: string
}
