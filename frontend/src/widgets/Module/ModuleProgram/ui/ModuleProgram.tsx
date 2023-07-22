import { useTranslation } from 'react-i18next'

import classes from './ModuleProgram.module.scss'

import { ModuleList } from 'entities/Module/ModuleList'
import { EListModuleType, IListModule, IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { Htag, List } from 'shared/ui'

export const ModuleProgram = ({ styles }: IModuleProgramProps) => {
	const data: IModuleData[] = [
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
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
						description:
							'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
					},
					file_task_id: null,
					module_type: EListModuleType.LECTURE,
					test_task_id: null,
				},
			],
		},
	]
	const { t } = useTranslation('course')

	return (
		<div className={cn(classes.CourseProgram, [styles])}>
			<Htag
				styles={classes.title}
				tag={'large'}
			>
				{t('programma-kursa')}
			</Htag>
			<List
				items={data}
				renderItem={(module: IModuleData) => (
					<ModuleList
						key={module.id}
						module={module}
					/>
				)}
				variation={'list'}
			/>
		</div>
	)
}

interface IModuleProgramProps {
	styles?: string
}
