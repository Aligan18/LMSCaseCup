import { useTranslation } from 'react-i18next'

import classes from './CreateTicketButton.module.scss'

import { Button } from 'shared/ui'

export const CreateTicketButton = ({ styles }: ICreateTicketButtonProps) => {
	const { t } = useTranslation('ticket')
	return (
		<Button styles={[classes.CreateTicket, styles].join(' ')}>{t('otpravit-zayavku')}</Button>
	)
}

interface ICreateTicketButtonProps {
	styles?: string
}