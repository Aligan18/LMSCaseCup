import { useTranslation } from 'react-i18next'

import classes from './CreateTicketAnswerPage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateTicketAnswerForm } from 'features/Ticket/CreateTicketAnswerForm'

import { classnames as cn } from 'shared/lib'
import { Button, CircleForIcon, Header, Hr, Htag, Icon, TextBox } from 'shared/ui'

export const CreateTicketAnswerPage = ({ styles }: ICreateTicketAnswerPageProps) => {
	const { t } = useTranslation('ticket')
	const status = false
	const data = [
		{
			title: 'Мне надоели все твои тупые вопросы',
			description: 'Не грузите меня, это класс первый',
		},
	]

	return (
		<div className={cn(classes.CreateTicketAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header title={`${t('otvet')}`} />
					<div className={classes.grid_block}>
						<div className={classes.indicator_block}>
							{status ? (
								<CircleForIcon
									variation="primary"
									styles={classes.indicator}
								>
									<Icon
										icon={'done'}
										variation={'primary'}
										styles={classes.indicator}
									/>
								</CircleForIcon>
							) : (
								<CircleForIcon
									variation="red"
									styles={classes.indicator}
								>
									<Icon
										icon={'close'}
										variation={'red'}
										styles={classes.indicator}
									/>
								</CircleForIcon>
							)}
						</div>

						<div className={classes.title}>
							<Htag tag={'medium'}>{data[0].title}</Htag>
						</div>
						<div className={classes.message}>
							<TextBox size={'medium'}>{data[0].description}
							</TextBox>
						</div>
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
