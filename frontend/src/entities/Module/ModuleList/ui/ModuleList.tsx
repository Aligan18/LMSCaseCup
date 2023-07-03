import { useState } from 'react'

import classes from './ModuleList.module.scss'

import { ILessonData, IModuleData, LessonListItem, ModuleListItem } from 'entities/Module'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'

export const ModuleList = ({ styles, module }: IModuleListProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div
			className={cn(classes.ModuleList, [styles])}
			key={module.id}
		>
			<ModuleListItem
				data={module}
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<List
					styles={classes.lesson_list}
					items={module.lesson}
					variation={'list'}
					renderItem={(data: ILessonData) => (
						<LessonListItem
							data={data}
							key={data.id}
						/>
					)}
				/>
			)}
		</div>
	)
}

interface IModuleListProps {
	styles?: string
	module: IModuleData
}
