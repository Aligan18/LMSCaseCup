import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './LessonListItem.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { IAboutLessonData } from 'entities/Lesson/types'

import { classnames as cn, deleteRouteId } from 'shared/lib'
import { AnimatedButton, Button, Htag, Icon, TextBox } from 'shared/ui'

export const LessonListItem = ({ styles, data, hasButton = true }: ILessonListItemProps) => {
	const { t } = useTranslation('course')

	return (
		<div className={cn(classes.LessonListItem, [styles])}>
			<div className={classes.left_block}>
				<TextBox size={'medium'}>{data.title}</TextBox>
				<Htag tag={'very-small'}>{data.description}</Htag>
			</div>
			{hasButton && (
				<Link to={deleteRouteId(ERoutePath.LESSON) + data.id}>
					<AnimatedButton icon={'right'}>Пререйти</AnimatedButton>
				</Link>
			)}
		</div>
	)
}

interface ILessonListItemProps {
	styles?: string
	data: IAboutLessonData
	hasButton?: boolean
}
