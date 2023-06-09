import { BaseSyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './CreateTicketForm.module.scss'

import { ICreateTicketData, ITicketFormConstructor } from 'entities/Ticket/types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateTicketForm = ({ styles }: ICreateTicketFormProps) => {
	const { t } = useTranslation('ticket')

	const onSubmit = (formData: ICreateTicketData, event: BaseSyntheticEvent) => {
		event.preventDefault()

		console.log(formData)
	}

	const data: ITicketFormConstructor[] = [
		{
			type: 'input',
			title: `${t('nazvanie')}`,
			description: `${t('do ')}` + 20 + `${t(' simvolov')}`,
			key: 'title',
			rules: {
				required: true,
				maxLength: 20,
			},
		},
		{
			type: 'selector',
			options: [
				{ title: 'Смена обучения', value: '1' },
				{ title: 'Смена обуч', value: '2' },
				{ title: 'Смена ', value: '3' },
			],
			title: `${t('tema-obrasheniya')}`,
			key: 'theme',
			rules: {
				required: true,
			},
		},
		{
			type: 'text-input',
			title: `${t('opisanie-tiketa')}`,
			description: `${t('do ')}` + 80 + `${t(' simvolov')}`,
			key: 'description',
			rules: {
				required: true,
				maxLength: 80,
			},
		},

		{
			type: 'file-input',
			key: 'file',
			rules: {
				required: true,
			},
		},
	]
	return (
		<div className={cn(classes.CreateTicketForm, [styles])}>
			<FormConstructor
				onSubmit={onSubmit}
				data={data}
				button={`${t('otpravit-zayavku-0')}`}
			/>
		</div>
	)
}

interface ICreateTicketFormProps {
	styles?: string
}
