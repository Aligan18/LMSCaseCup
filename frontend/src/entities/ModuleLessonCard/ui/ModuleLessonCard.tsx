import { useTranslation } from 'react-i18next'

import classes from './ModuleLessonCard.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const ModuleLessonCard = ({ styles }: IModuleLessonCardProps) => {
	const { t } = useTranslation('course')
	return (
		<div className={cn(classes.ModuleLessonCard, [styles])}>
			<div className={classes.left_block}>
				<Htag
					tag={'medium'}
					style={{ lineHeight: '1.75' }}
				>
					Название урока
				</Htag>
				<Htag
					tag={'very-small'}
					style={{ lineHeight: '1.25' }}
				>
					Описание урока
				</Htag>
			</div>
			<div className={classes.right_block}>
				<Button
					variation="primary"
					styles={classes.button}
					format={'small'}
				>
					{t('pereiti')}
					<Icon
						variation={'secondary'}
						icon={'right'}
					/>
				</Button>
			</div>
		</div>
	)
}

interface IModuleLessonCardProps {
	styles?: string
}
