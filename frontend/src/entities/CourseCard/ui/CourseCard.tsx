import { useTranslation } from 'react-i18next'

import classes from './CourseCard.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'
import { Htag } from 'shared/ui'
import { TextBox } from 'shared/ui'

export const CourseCard = ({ styles, data }: ICourseCardProps) => {
	const { t } = useTranslation()
	return (
		<div className={cn(classes.Card, [styles])}>
			<div className={classes.image}>
				<img />
			</div>

			<div className={classes.title}>
				<Htag tag={'medium'}>{data.title}</Htag>
			</div>

			<TextBox size={'small'}>{data.description}</TextBox>
			<TextBox size={'medium'}>{data.price + ' тг'} </TextBox>

			<div className={classes.wrapper_button}>
				<Button
					styles={classes.button}
					format={'small'}
				>
					{t('podrobnee')}
					<Icon
						variation={'secondary'}
						icon={'link'}
					/>
				</Button>
			</div>
		</div>
	)
}

interface ICourseCardProps {
	styles?: string
	data: ICourseDataProps
}

interface ICourseDataProps {
	id: number
	title: string
	description: string
	price: number
}
