import classes from './FormConstructor.module.scss'

import { classnames as cn } from 'shared/lib'

export const FormConstructor = ({ styles }: IFormConstructorProps) => {
	const data = [
		{
			type: 'input',
			title: 'Название',
			description: 'До 20 символов',
		},
		{
			type: 'selector',
			options: ['Смена обучения', 'Смена обучения', 'Смена обучения'],
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
			title: 'Описание тикета',
			description: 'До 80 символов',
		},
	]
	return <form className={cn(classes.FormConstructor, [styles])}></form>
}

interface IFormConstructorProps {
	styles?: string
}
