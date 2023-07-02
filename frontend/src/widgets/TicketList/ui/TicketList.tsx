import { IAboutTicketData } from '../types/Ticket.types'
import classes from './TicketList.module.scss'

import { TicketItem } from 'entities/Ticket'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'

export const TicketList = ({ styles }: ITicketListProps) => {
	const data = [
		{
			date: '01.01.2023',
			title: 'Не отправляется ДЗ',
			completed: false,
		},
		{
			date: '01.01.2023',
			title: 'Я ничего не понимаю =(',
			completed: true,
		},
		{
			date: '01.01.2023',
			title: 'У меня нет задания ',
			completed: false,
		},
		{
			date: '01.01.2023',
			title: 'Материал не открывается',
			completed: false,
		},
	]
	return (
		<div className={cn(classes.TicketList, [styles])}>
			<List
				items={data}
				renderItem={(info: IAboutTicketData) => (
					<TicketItem
						key={info.id}
						data={info}
					/>
				)}
				variation={'list'}
			/>
		</div>
	)
}

interface ITicketListProps {
	styles?: string
}
