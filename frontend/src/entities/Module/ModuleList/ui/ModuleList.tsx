import { useState } from 'react'

import classes from './ModuleList.module.scss'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { IAboutLessonData } from 'entities/Lesson/types'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'
import { AccordionWrapper } from 'shared/ui'

export const ModuleList = ({ styles, module }: IModuleListProps) => {
	return (
		<div
			className={cn(classes.ModuleList, [styles])}
			key={module.id}
		>
			<AccordionWrapper
				main={<ModuleListItem data={module} />}
				renderItems={
					<List
						styles={classes.lesson_list}
						items={module.lesson}
						variation={'list'}
						renderItem={(data: IAboutLessonData) => (
							<LessonListItem
								data={data}
								key={data.id}
							/>
						)}
					/>
				}
			/>
		</div>
	)
}

interface IModuleListProps {
	styles?: string
	module: IModuleData
}
