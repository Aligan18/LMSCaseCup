import { useTranslation } from 'react-i18next'

import classes from './Sidebar.module.scss'

import { classnames as cn } from 'shared/lib'
import { Icon, ListItem } from 'shared/ui'

export const Sidebar = ({ styles }: ISidebarProps) => {
	const { t } = useTranslation()

	return (
		<div className={cn(classes.Sidebar, [styles])}>
			<div className={classes.top_button}>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="home" />}
					styles={classes.top_button}
				>
					{t('moe-obuchenie')}
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="courses" />}
					styles={classes.top_button}
				>
					{t('kursy')}
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="calendar" />}
					styles={classes.top_button}
				>
					{t('kalendar')}
				</ListItem>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="chat" />}
					styles={classes.top_button}
				>
					{t('soobsheniya')}
				</ListItem>
			</div>
			<div className={classes.bottom_button}>
				<ListItem
					hover={'hover_inverted-secondary'}
					variation={'clear'}
					left={<Icon icon="shield" />}
					styles={classes.bottom_button}
				>
					{t('podderzhka')}
				</ListItem>
			</div>
		</div>
	)
}

interface ISidebarProps {
	styles?: string
}
