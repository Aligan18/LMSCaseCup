import classes from './ModuleCard.module.scss'

import { classnames as cn } from 'shared/lib'
import { CircleForIcon, Htag, Icon } from 'shared/ui'

export const ModuleCard = ({ styles }: IModuleCardProps) => {
	return (
		<div className={cn(classes.ModuleCard, [styles])}>
			<div className={classes.left_block}>
				<Htag
					tag={'very-small'}
					style={{ lineHeight: '1' }}
				>
					Модуль №1
				</Htag>
				<Htag
					tag={'medium'}
					style={{ lineHeight: '2' }}
				>
					Название модуля
				</Htag>
				<Htag
					tag={'small'}
					style={{ lineHeight: '1.25' }}
				>
					Описание модуля
					<br /> Описание модуля
				</Htag>
			</div>
			<div className={classes.right_block}>
				<CircleForIcon>
					<Icon
						variation={'primary'}
						icon={'up'}
					/>
				</CircleForIcon>
			</div>
		</div>
	)
}

interface IModuleCardProps {
	styles?: string
}
