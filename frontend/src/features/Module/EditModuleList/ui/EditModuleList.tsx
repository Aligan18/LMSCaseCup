import { BaseSyntheticEvent, useState } from 'react'

import classes from './EditModuleList.module.scss'

import { ModuleList } from 'entities/Module/ModuleList'
import { IModuleData } from 'entities/Module/types'

import { classnames as cn } from 'shared/lib'
import { DeleteZone, Icon, List } from 'shared/ui'

export const EditModuleList = ({ styles }: IEditModuleListProps) => {
	const moduledata: IModuleData[] = [
		{
			id: 1,
			order: 1,
			title: 'Первый модуль ',
			description: 'Введение ',
			number: 1,
			lesson: [
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 2,
					title: 'Основы программирования',
					description:
						'IDE и установка Python, файлы. Погружение: коллекции и вложенность, JSON, requests ',
				},
				{
					id: 3,
					title: 'Основы backend-разработки',
					description:
						'Введение в работу с командной строкой. Командная строка и Linux. Введение в работу с Git. Работа с ветками в Git. Настройка окружения. Тестирование. ',
				},
			],
		},
		{
			id: 2,
			order: 2,
			title: 'Второй модуль ',
			description: 'Введение ',
			number: 1,
			lesson: [
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 2,
					title: 'Основы программирования',
					description:
						'IDE и установка Python, файлы. Погружение: коллекции и вложенность, JSON, requests ',
				},
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 2,
					title: 'Основы программирования',
					description:
						'IDE и установка Python, файлы. Погружение: коллекции и вложенность, JSON, requests ',
				},
			],
		},
		{
			id: 3,
			order: 3,
			title: 'Третий модуль ',
			description: 'Введение ',
			number: 1,
			lesson: [
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 2,
					title: 'Основы программирования',
					description:
						'IDE и установка Python, файлы. Погружение: коллекции и вложенность, JSON, requests ',
				},
				{
					id: 1,
					title: 'Введение в программирование',
					description:
						'Введение в профессию и основы алгоритмизации Основы синтаксиса Списки и циклы ',
				},
				{
					id: 2,
					title: 'Основы программирования',
					description:
						'IDE и установка Python, файлы. Погружение: коллекции и вложенность, JSON, requests ',
				},
			],
		},
	]
	const [currentId, setCurrentId] = useState<string | undefined>(undefined)

	return (
		<div className={cn(classes.EditModuleList, [styles])}>
			<List
				items={moduledata}
				renderItem={(module: IModuleData) => (
					<ModuleList
						editor={true}
						key={module.id}
						module={module}
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
