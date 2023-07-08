import { useState } from 'react'

import classes from './ModuleList.module.scss'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { IAboutLessonData } from 'entities/Lesson/types'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IModuleData } from 'entities/Module/types'

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
				isOpen={isOpen}
				data={module}
				onClick={() => setIsOpen(!isOpen)}
			/>

			<List
				styles={[classes.lesson_list, isOpen && classes.is_open].join(' ')}
				items={module.lesson}
				variation={'list'}
				renderItem={(data: IAboutLessonData) => (
					<LessonListItem
						data={data}
						key={data.id}
					/>
				)}
			/>
		</div>
	)
}

interface IModuleListProps {
	styles?: string
	module: IModuleData
}
