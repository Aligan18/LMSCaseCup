import classes from './TicketsPage.module.scss'

import { TicketList } from 'widgets/TicketList'

import { classnames as cn } from 'shared/lib'
import { Htag } from 'shared/ui'

const TicketsPage = ({ styles }: ITicketPageProps) => {
	return (
		<div className={cn(classes.TicketsPage, [styles])}>
			<Htag
				styles={classes.title}
				tag="large"
			>
				Мои обращения
			</Htag>
			<hr className={classes.line} />
			<TicketList />
		</div>
	)
}

export default TicketsPage

interface ITicketPageProps {
	styles?: string
}