import classes from './CreateTicketForm.module.scss'

import { classnames as cn } from 'shared/lib'
import { FormConstructor, IFormConstructorData } from 'shared/ui'

export const CreateTicketForm = ({ styles }: ICreateTicketFormProps) => {
	const data: IFormConstructorData[] = [
		{
			type: 'input',
			title: 'Название',
			description: 'До 20 символов',
		},
		{
			type: 'selector',
			options: [
				{ title: 'Смена обучения', value: '1' },
				{ title: 'Смена обучения', value: '2' },
				{ title: 'Смена обучения', value: '3' },
			],
			title: 'Тема обращение',
			description: 'До 20 символов',
		},
		{
			type: 'text-input',
			title: 'Описание тикета',
			description: 'До 80 символов',
		},
		{
			type: 'check-box',
			title: 'Вы принимаете условия соглашения ? ',
			description: 'Принять',
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
