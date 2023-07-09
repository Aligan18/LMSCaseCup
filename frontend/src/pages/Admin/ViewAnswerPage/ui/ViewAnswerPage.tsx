import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './ViewAnswerPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'

import { StarsGroup } from 'entities/StarsGroup'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextBox } from 'shared/ui'

export const ViewAnswerPage = ({ styles }: IViewAnswerPageProps) => {
	const { t } = useTranslation('admin')
	const [rating, setRating] = useState(0)

	return (
		<div className={cn(classes.ViewAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header
						title={'Задание №1'}
						buttons={
							<Button
								variation="primary"
								styles={classes.button}
								format={'small'}
							>
								Открыть чат
								<Icon
									icon={'done'}
									variation={'white'}
								></Icon>
							</Button>
						}
					/>
					<Htag tag={'small'}>Описание задания</Htag>
					<div className={classes.download}>
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							Скачать ""
							<Icon
								icon={'file'}
								variation={'white'}
							></Icon>
						</Button>
						<Htag tag={'very-small'}>2.3 Мб</Htag>
					</div>
					<Htag tag={'small'}>Комментарий к заданию</Htag>
					<div className={classes.message}>
						<TextBox size={'medium'}>JJh</TextBox>
					</div>
					<Htag tag={'small'}>Оценка задания</Htag>
					<StarsGroup
						rating={rating}
						changeable={true}
						setRating={setRating}
					></StarsGroup>
				</div>
			</div>
		</div>
	)
}
export default ViewAnswerPage

interface IViewAnswerPageProps {
	styles?: string
}
