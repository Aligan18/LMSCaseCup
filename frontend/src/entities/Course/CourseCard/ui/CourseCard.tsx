import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './CourseCard.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { IAboutCourseData } from 'entities/Course'

import { classnames as cn, deleteRouteId } from 'shared/lib'
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
				<Link to={deleteRouteId(ERoutePath.ABOUT_COURSE) + data.id}>
					<Button
						variation="clear"
						styles={classes.button}
						format={'small'}
					>
						{t('podrobnee')}
						<Icon
							variation={'primary'}
							icon={'link'}
						/>
					</Button>
				</Link>
			</div>
		</div>
	)
}

interface ICourseCardProps {
	styles?: string
	data: IAboutCourseData
}
