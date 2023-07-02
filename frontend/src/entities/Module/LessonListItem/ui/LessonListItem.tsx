import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './LessonListItem.module.scss'

import { ILessonData } from 'widgets/CourseProgram'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const LessonListItem = ({ styles, data }: ILessonListItemProps) => {
	const { t } = useTranslation('course')
	const [isHovered, setIsHovered] = useState<boolean>(false)
	return (
		<div className={cn(classes.LessonListItem, [styles])}>
			<div className={classes.left_block}>
				<Htag
					tag={'medium'}
					style={{ lineHeight: '1.75' }}
				>
					{data.title}
				</Htag>
				<Htag
					tag={'very-small'}
					style={{ lineHeight: '1.25' }}
				>
					{data.description}
				</Htag>
			</div>
			<div className={classes.right_block}>
				<Button
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					variation="primary"
					styles={classes.button}
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
		</div>
	)
}

interface ILessonListItemProps {
	styles?: string
	data: ILessonData
}
