import { useTranslation } from 'react-i18next'

import classes from './LessonList.module.scss'

import { IAboutLessonData } from 'entities/Lesson/types'

import { classnames as cn } from 'shared/lib'
import { Htag, Icon, List, ListItem } from 'shared/ui'

export const LessonList = ({ styles }: ILessonListProps) => {
	const { t } = useTranslation('course')

	const data = [
		{ id: 1, title: 'Название урока', number: 1, status: true },
		{ id: 2, title: 'Название урока', number: 2, status: false },
		{ id: 3, title: 'Название урока', number: 3, status: false },
		{ id: 1, title: 'Название урока', number: 1, status: true },
		{ id: 2, title: 'Название урока', number: 2, status: false },
		{ id: 3, title: 'Название урока', number: 3, status: false },
	]
	return (
		<div className={cn(classes.LessonList, [styles])}>
			<Htag tag={'medium'}>{t('raspisanie')}</Htag>
			<List
				styles={classes.list}
				variation={'list'}
				items={data}
				renderItem={(lesson: IAboutLessonData) => (
					<ListItem
						variation={'inverted-secondary'}
						hover={'hover_primary'}
						mid_up={`${t('urok')}` + ' №' + lesson.number}
						left={
							<Icon
								icon={lesson.status ? 'circle_filled' : 'circle'}
								variation={'primary'}
							/>
						}
					>
						{lesson.title}
					</ListItem>
				)}
			/>
		</div>
	)
}

interface ILessonListProps {
	styles?: string
}
