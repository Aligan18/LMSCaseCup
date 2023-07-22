import { useState } from 'react'

import classes from './EditModuleList.module.scss'

import { ModuleList } from 'entities/Module/ModuleList'
import { EListModuleType, IListModule, IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'

export const EditModuleList = ({ styles }: IEditModuleListProps) => {
	const moduledata: IModuleData[] = [
		{
			id: 1,
			order: 1,
			title: 'Первый модуль ',
			description: 'Введение ',
			number: 1,
			list_modules: [
				{
					id: 1,
					order: 1,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
				{
					id: 2,
					order: 2,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
				{
					id: 3,
					order: 3,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
			],
		},
		{
			id: 2,
			order: 2,
			title: 'Второй модуль ',
			description: 'Введение ',
			number: 1,
			list_modules: [
				{
					id: 1,
					order: 1,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
				{
					id: 2,
					order: 2,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
				{
					id: 3,
					order: 3,
					lecture_id: {
						id: 1,
						title: 'Введение в программирование',
						description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
			],
		},
	]
	const [currentId, setCurrentId] = useState<string | undefined>(undefined)

	const [currentContent, setCurrentContent] = useState<IModuleData | IListModule | undefined>(undefined)

	return (
		<div className={cn(classes.EditModuleList, [styles])}>
			<List
				items={moduledata}
				renderItem={(module: IModuleData) => (
					<ModuleList
						moduledata={moduledata}
						setCurrentContent={setCurrentContent}
						editor={true}
						key={module.id}
						module={module}
						currentContent={currentContent}
						currentId={currentId}
						setCurrentId={setCurrentId}
					/>
				)}
				variation={'list'}
			/>
		</div>
	)
}

interface IEditModuleListProps {
	styles?: string
}
