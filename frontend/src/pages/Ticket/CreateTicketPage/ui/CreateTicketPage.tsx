import { useTranslation } from 'react-i18next'

import classes from './CreateTicketPage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateTicketButton } from 'features/Ticket/CreateTicketButton'

import { classnames as cn } from 'shared/lib'
import { Header } from 'shared/ui'

const CreateTicketPage = ({ styles }: ICreateTicketPageProps) => {
	const { t } = useTranslation('ticket')
	return (
		<div className={cn(classes.CreateTicketPage, [styles])}>
			<div>
				<BackButton />
			</div>
			<div className={classes.wrapper}>
				<Header
					title={t('novyi-tiket')}
					buttons={<CreateTicketButton />}
				/>
			</div>
		</div>
	)
}

export default CreateTicketPage

interface ICreateTicketPageProps {
	styles?: string
}