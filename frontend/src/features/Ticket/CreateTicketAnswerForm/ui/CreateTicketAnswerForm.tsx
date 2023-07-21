import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateTicketAnswerForm.module.scss'

import {
	ICreateTicketAnswerData,
	ITicketAnswerFormConstructor,
} from 'entities/Ticket/types/Ticket.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateTicketAnswerForm = ({ styles }: ICreateTicketAnswerFormProps) => {
	const { t } = useTranslation('ticket')

	const onSubmit: SubmitHandler<ICreateTicketAnswerData> = (
		formData: ICreateTicketAnswerData,
		event,
	) => {
		event?.preventDefault()

		console.log(formData)
	}
	const data: ITicketAnswerFormConstructor[] = [
		{
			type: 'text-input',
			title: `${t('otvet-na-tiket')}`,
			description: `${t('do ')}` + 280 + `${t(' simvolov')}`,
			key: 'answer',
			rules: {
				required: true,
				maxLength: 280,
			},
		},
	]
	return (
		<div className={cn(classes.CreateTicketAnswerForm, [styles])}>
			<FormConstructor<ICreateTicketAnswerData>
				onSubmit={onSubmit}
				data={data}
				button={`${t('otpravit-otvet')}`}
			/>
		</div>
	)
}

interface ICreateTicketAnswerFormProps {
	styles?: string
}
