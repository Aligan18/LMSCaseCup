import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './ViewAnswerPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'

import { StarsGroup } from 'entities/StarsGroup'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextBox, TextInput } from 'shared/ui'

export const ViewAnswerPage = ({ styles }: IViewAnswerPageProps) => {
	const { t } = useTranslation('admin')
	const [rating, setRating] = useState(0)

	return (
		<div className={cn(classes.ViewAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<Header
					title={'Задание №1'}
					buttons={
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							{t('ocenit')}
							<Icon
								icon={'done'}
								variation={'white'}
							></Icon>
						</Button>
					}
				/>
				<div className={classes.wrapper}>
					<Htag tag={'small'}>Описание задания</Htag>
					<div className={classes.download}>
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							{t('skachat')} ""
							<Icon
								icon={'file'}
								variation={'white'}
							></Icon>
						</Button>
						<Htag tag={'very-small'}>2.3 {t('mb')}</Htag>
					</div>
					<Htag tag={'small'}>{t('kommentarii-studenta')}</Htag>
					<div className={classes.message}>
						<TextBox size={'medium'}>
							Это 008 помни памятную дату, мы вас разносим словно в цирке сахарную
							вату
						</TextBox>
					</div>
					<Htag tag={'small'}>{t('ocenka-zadaniya')}</Htag>
					<div className={classes.stars}>
						<StarsGroup
							rating={rating}
							changeable={true}
							setRating={setRating}
						></StarsGroup>
					</div>
					<Htag tag={'small'}>{t('kommentarii-k-ocenke')}</Htag>
					<Htag tag={'very-small'}>До 300 символов</Htag>


					<TextInput styles={classes.your_message}>{t('kommentarii')}</TextInput>
				</div>
			</div>
		</div>
	)
}
export default ViewAnswerPage

interface IViewAnswerPageProps {
	styles?: string
}
