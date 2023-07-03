import { useTranslation } from 'react-i18next'

import classes from './CourseProgram.module.scss'

import { IModuleData, ModuleList } from 'entities/Module'

import { classnames as cn } from 'shared/lib'
import { Htag, List } from 'shared/ui'

export const CourseProgram = ({ styles }: ICourseProgramProps) => {
	const data = [
		{
			id: 1,
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
			],
		},
		{
			id: 3,
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

interface ICourseProgramProps {
	styles?: string
}
