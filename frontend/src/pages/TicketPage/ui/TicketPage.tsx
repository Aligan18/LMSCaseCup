import classes from './TicketPage.module.scss'

import { classnames as cn } from 'shared/lib'

const TicketPage = ({ styles }: ITicketPageProps) => {
	return <div className={cn(classes.TicketPage, [styles])}></div>
}

export default TicketPage

interface ITicketPageProps {
	styles?: string
}
