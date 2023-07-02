import classes from './TicketItem.module.scss'

import { classnames as cn } from 'shared/lib'
import { CircleForIcon, Icon, ListItem } from 'shared/ui'

export const TicketItem = ({ styles }: ITicketProps) => {
	return (
		<div className={cn(classes.TicketItem, [styles])}>
			<ListItem
				styles={classes.wrapper}
				hover={'none'}
				variation={'inverted-secondary'}
				mid_up={'01.01.2023'}
				right={
					<CircleForIcon>
						<Icon icon={'done'} />
					</CircleForIcon>
				}
			>
				Не отправляется ДЗ
			</ListItem>
		</div>
	)
}

interface ITicketProps {
	styles?: string
}
