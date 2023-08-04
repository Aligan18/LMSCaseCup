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

	const data = [
		{
			title: 'Сделать корреляционный анализ',
			description:
				'Выполните работу, дедлайн до 01.10.2020. 1. Установите, имеется ли корреляционная связь между x и y; определите коэффициент корреляции r: 2. Определите тесноту корреляционной связи. 3. Составьте уравнение регрессии и найдите ожидаемое значение для y при х=18. Решение: Построим график, отложив вдоль оси абсцисс Х величину интрасклерального давления х , а вдоль оси ординат Y – величину внутриглазного давления y.Тогда каждой паре значений х и у на графике будет соответствовать определѐнная точка. По характеру расположения точек можно предположить существование линейной корреляционной связи между х и у',
		},
	]

	return (
		<div className={cn(classes.ViewAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<Header
					title={`${data[0].title}`}
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
					<div className={classes.message}>
						<Htag tag={'small'}>{data[0].description}</Htag>
					</div>
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
					<Header
						title={`$Ответ студента`}
						styles={classes.head}
					/>
					<div className={classes.message}>
						<Htag tag={'small'}>{data[0].description}</Htag>
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
