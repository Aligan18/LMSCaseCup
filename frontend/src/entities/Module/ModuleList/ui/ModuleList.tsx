import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

import classes from './ModuleList.module.scss'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IListModule, IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { AccordionWrapper, List } from 'shared/ui'

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
						items={module.list_modules}
						variation={'list'}
						renderItem={(data: IListModule) => (
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

interface IModuleListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	module: IModuleData
}
