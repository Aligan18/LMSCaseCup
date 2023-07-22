import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './LessonListItem.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { IAboutLessonData } from 'entities/Lesson/types'
import { EListModuleType, IListModule } from 'entities/Module/types'

import { classnames as cn, deleteRouteId } from 'shared/lib'
import { AnimatedButton, Button, Htag, Icon, TextBox } from 'shared/ui'

export const LessonListItem = ({ styles, data, hasButton = true }: ILessonListItemProps) => {
	const { t } = useTranslation('course')

	const renderContent = () => {
		switch (data.module_type) {
			case EListModuleType.LECTURE:
				return (
					<>
						<div className={classes.left_block}>
							<TextBox size={'medium'}>{data.lecture_id?.title}</TextBox>
							<Htag tag={'very-small'}>{data.lecture_id?.description}</Htag>
						</div>
						{hasButton && (
							<Link to={deleteRouteId(ERoutePath.LESSON) + data.lecture_id?.id}>
								<AnimatedButton icon={'right'}>Пререйти</AnimatedButton>
							</Link>
						)}
					</>
				)

			default:
				break
		}
	}

	return <div className={cn(classes.LessonListItem, [styles])}>{renderContent()}</div>
}

interface ILessonListItemProps {
	styles?: string
	data: IListModule
	hasButton?: boolean
}
