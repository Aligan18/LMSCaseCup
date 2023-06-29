import classes from './Sidebar.module.scss'

import { classnames as cn } from 'shared/lib'
import { Icon, ListItem } from 'shared/ui'

export const Sidebar = ({ styles }: ISidebarProps) => {
	return (
		<div className={cn(classes.Sidebar, [styles])}>
			<div className={classes.top_button}>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="home" />}
					styles={classes.top_button}
				>
					Мое обучение
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="courses" />}
					styles={classes.top_button}
				>
					Курсы
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="calendar" />}
					styles={classes.top_button}
				>
					Календарь
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="chat" />}
					styles={classes.top_button}
				>
					Сообщения
				</ListItem>
			</div>
			<div className={classes.bottom_button}>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="shield" />}
					styles={classes.bottom_button}
				>
					Поддержка
				</ListItem>
			</div>
		</div>
	)
}

interface ISidebarProps {
	styles?: string
}
