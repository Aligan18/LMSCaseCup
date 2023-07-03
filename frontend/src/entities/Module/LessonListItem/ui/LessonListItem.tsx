import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './LessonListItem.module.scss'

import { ILessonData } from 'entities/Module'

import { classnames as cn } from 'shared/lib'
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
		</div>
	)
}

interface ILessonListItemProps {
	styles?: string
	data: ILessonData
}
