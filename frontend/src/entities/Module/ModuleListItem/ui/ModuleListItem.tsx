import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './ModuleListItem.module.scss'

import { IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { CircleForIcon, Htag, Icon } from 'shared/ui'

export const ModuleListItem = ({ styles, data, isOpen, ...props }: IModuleListItemProps) => {
	const { t } = useTranslation('course')
	return (
		<div
			className={cn(classes.ModuleListItem, [styles])}
			{...props}
		>
			<div className={classes.left_block}>
				<Htag tag={'very-small'}>
					{t('modul')} {data.number}
				</Htag>
				<Htag tag={'medium'}>{data.title}</Htag>
				<Htag
					styles={classes.description}
					tag={'small'}
				>
					{data.description}
				</Htag>
			</div>
			<div className={classes.right_block}>
				<CircleForIcon variation={'primary'}>
					<Icon
						styles={[classes.animate, isOpen && classes.is_open].join(' ')}
						variation={'primary'}
						icon={'up'}
					/>
				</CircleForIcon>
			</div>
		</div>
	)
}

interface IModuleListItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	data: IModuleData
	isOpen: boolean
}
