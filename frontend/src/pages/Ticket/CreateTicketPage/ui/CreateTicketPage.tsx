import classes from './CreateTicketPage.module.scss'

import { classnames as cn } from 'shared/lib'

const CreateTicketPage = ({ styles }: ICreateTicketPageProps) => {
	return <div className={cn(classes.CreateTicketPage, [styles])}></div>
}

export default CreateTicketPage

interface ICreateTicketPageProps {
	styles?: string
}
