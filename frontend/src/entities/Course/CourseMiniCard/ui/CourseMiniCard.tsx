import { useTranslation } from 'react-i18next'

import classes from './CourseMiniCard.module.scss'

import { IAboutCourseData } from 'entities/Course'

import { classnames as cn } from 'shared/lib'
import { Icon } from 'shared/ui'
import { Htag } from 'shared/ui'
import { TextBox } from 'shared/ui'

export const CourseMiniCard = ({ styles, data }: ICourseMiniCardProps) => {
	const { t } = useTranslation()
	return (
		<div className={cn(classes.mini_card, [styles])}>
			<div className={classes.image}>
				<img />
			</div>

			<div className={classes.tegs}>
				<div className={cn(classes.first_teg, [classes.teg])}>
					<Icon
						icon={'clock'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>2 месяца</Htag>
				</div>
				<div className={cn(classes.second_teg, [classes.teg])}>
					<Icon
						icon={'video'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>16 уроков</Htag>
				</div>
				<div className={cn(classes.third_teg, [classes.teg])}>
					<Icon
						icon={'file'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>24 материала</Htag>
				</div>
			</div>

			<TextBox size={'medium'}>{data.price + ' тг'} </TextBox>
		</div>
	)
}

interface ICourseMiniCardProps {
	styles?: string
	data: IAboutCourseData
}
