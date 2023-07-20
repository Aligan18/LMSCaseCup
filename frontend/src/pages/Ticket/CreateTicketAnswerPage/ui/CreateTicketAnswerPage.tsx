import { useTranslation } from 'react-i18next'

import classes from './CreateTicketAnswerPage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateTicketAnswerForm } from 'features/Ticket/CreateTicketAnswerForm'

import { classnames as cn } from 'shared/lib'
import { Button, CircleForIcon, Header, Hr, Htag, Icon, TextBox } from 'shared/ui'

export const CreateTicketAnswerPage = ({ styles }: ICreateTicketAnswerPageProps) => {
	const { t } = useTranslation('ticket')

	return (
		<div className={cn(classes.CreateTicketAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header
						title={`${t('otvet')}`}
						buttons={
							<CircleForIcon variation="red">
								<Icon
									icon={'close'}
									variation={'red'}
								/>
							</CircleForIcon>
						}
					/>

					<div className={classes.title}>
						<Htag tag={'medium'}>Материал не открывается</Htag>
					</div>
					<div className={classes.message}>
						<TextBox size={'medium'}>
							Это 008 помни памятную дату, мы вас разносим словно в цирке сахарную
							вату
						</TextBox>
					</div>
					<div className={classes.download}>
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							{t('skachat-0')} ""
							<Icon
								icon={'file'}
								variation={'white'}
							></Icon>
						</Button>
						<Htag tag={'very-small'}>2.3 {t('mb-0')}</Htag>
					</div>
					<div className={classes.hr}>
						<Hr />
					</div>

					<CreateTicketAnswerForm />
				</div>
			</div>
		</div>
	)
}

export default CreateTicketAnswerPage

interface ICreateTicketAnswerPageProps {
	styles?: string
}
