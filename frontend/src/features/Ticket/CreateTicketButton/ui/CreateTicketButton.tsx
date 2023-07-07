import { useTranslation } from 'react-i18next'

import classes from './CreateTicketButton.module.scss'

import { Button } from 'shared/ui'

export const CreateTicketButton = ({ styles, ...props }: ICreateTicketButtonProps) => {
	const { t } = useTranslation('ticket')
	return (
		<Button
			onClick={() => {
				console.log('CLICKED')
			}}
			styles={[classes.CreateTicket, styles].join(' ')}
			{...props}
		>
			{t('otpravit-zayavku')}
		</Button>
	)
}

interface ICreateTicketButtonProps {
	styles?: string
	disabled?: boolean
}
