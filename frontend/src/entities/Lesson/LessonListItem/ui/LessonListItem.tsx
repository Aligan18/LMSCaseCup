import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './LessonListItem.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { IAboutLessonData } from 'entities/Lesson'

import { classnames as cn, deleteRouteId } from 'shared/lib'
import { Button, Htag, Icon, TextBox } from 'shared/ui'

export const LessonListItem = ({ styles, data }: ILessonListItemProps) => {
	const { t } = useTranslation('course')
	const [isHovered, setIsHovered] = useState<boolean>(false)
	return (
		<div className={cn(classes.LessonListItem, [styles])}>
			<div className={classes.left_block}>
				<TextBox size={'medium'}>{data.title}</TextBox>
				<Htag tag={'very-small'}>{data.description}</Htag>
			</div>
			<Link to={deleteRouteId(ERoutePath.LESSON) + data.id}>
				<div
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className={classes.right_block}
				>
					<Button
						variation="primary"
						styles={isHovered ? classes.hover_button : classes.button}
						format={'small'}
					>
						<div className={classes.button_children}>
							{isHovered && <div>{t('pereiti')}</div>}

							<Icon
								variation={'secondary'}
								icon={'right'}
							/>
						</div>
					</Button>
				</div>
			</Link>
		</div>
	)
}

interface ILessonListItemProps {
	styles?: string
	data: IAboutLessonData
}
