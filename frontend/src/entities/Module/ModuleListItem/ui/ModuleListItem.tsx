import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './ModuleListItem.module.scss'

import { IModuleData } from 'widgets/CourseProgram'

import { classnames as cn } from 'shared/lib'
import { CircleForIcon, Htag, Icon } from 'shared/ui'

export const ModuleListItem = ({ styles, data, ...props }: IModuleListItemProps) => {
	const { t } = useTranslation('course')
	return (
		<div
			className={cn(classes.ModuleListItem, [styles])}
			{...props}
		>
			<div className={classes.left_block}>
				<Htag
					tag={'very-small'}
					style={{ lineHeight: '1' }}
				>
					{t('modul')} {data.number}
				</Htag>
				<Htag
					tag={'medium'}
					style={{ lineHeight: '2' }}
				>
					{data.title}
				</Htag>
				<Htag
					tag={'small'}
					style={{ lineHeight: '1.25' }}
				>
					{data.description}
				</Htag>
			</div>
			<div className={classes.right_block}>
				<CircleForIcon variation={'primary'}>
					<Icon
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
}
