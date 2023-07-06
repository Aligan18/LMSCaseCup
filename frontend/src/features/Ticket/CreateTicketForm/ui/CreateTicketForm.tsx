import { useTranslation } from 'react-i18next'

import classes from './CreateTicketForm.module.scss'

import { classnames as cn } from 'shared/lib'
import { FormConstructor, IFormConstructorData } from 'shared/ui'

export const CreateTicketForm = ({ styles }: ICreateTicketFormProps) => {
	const { t } = useTranslation('ticket')
	const data: IFormConstructorData[] = [
		{
			type: 'input',
			title: `${t('nazvanie')}`,
			description: `${t('do-20-simvolov')}`,
		},
		{
			type: 'selector',
			options: [
				{ title: 'Смена обучения', value: '1' },
				{ title: 'Смена обучения', value: '2' },
				{ title: 'Смена обучения', value: '3' },
			],
			title: 'Тема обращение',
		},
		{
			type: 'text-input',
			title: 'Описание тикета',
			description: 'До 80 символов',
		},

		{
			type: 'file-input',
		},
	]
	return (
		<div className={cn(classes.CreateTicketForm, [styles])}>
			<FormConstructor data={data} />
		</div>
	)
}

interface ICreateTicketFormProps {
	styles?: string
}
