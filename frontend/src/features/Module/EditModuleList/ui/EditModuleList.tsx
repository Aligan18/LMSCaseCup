import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './EditModuleList.module.scss'

import { ICREATE_MODULE_Params } from 'app/providers/AppRouters'

import { getAllListModulesRequest, getAllModuleData } from 'entities/Module/ModuleData'
import { ModuleList } from 'entities/Module/ModuleList'
import { EListModuleType, IListModule, IModuleData } from 'entities/Module/types'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { List } from 'shared/ui'

export const EditModuleList = ({ styles }: IEditModuleListProps) => {
	// const moduledata: IModuleData[] = [
	// 	{
	// 		id: 1,
	// 		order: 1,
	// 		title: 'Первый модуль ',
	// 		description: 'Введение ',
	// 		number: 1,
	// 		list_modules: [
	// 			{
	// 				id: 1,
	// 				order: 1,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 			{
	// 				id: 2,
	// 				order: 2,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 			{
	// 				id: 3,
	// 				order: 3,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 2,
	// 		order: 2,
	// 		title: 'Второй модуль ',
	// 		description: 'Введение ',
	// 		number: 1,
	// 		list_modules: [
	// 			{
	// 				id: 1,
	// 				order: 1,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 			{
	// 				id: 2,
	// 				order: 2,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 			{
	// 				id: 3,
	// 				order: 3,
	// 				lecture_id: {
	// 					id: 1,
	// 					title: 'Введение в программирование',
	// 					description: 'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
	// 				},
	// 				file_task_id: null,
	// 				module_type: EListModuleType.LECTURE,
	// 				test_task_id: null,
	// 			},
	// 		],
	// 	},
	// ]
	const { course_id } = useParams<ICREATE_MODULE_Params>()
	const moduledata = useSelector(getAllModuleData)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getAllListModulesRequest(Number(course_id)))
	}, [course_id])
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
