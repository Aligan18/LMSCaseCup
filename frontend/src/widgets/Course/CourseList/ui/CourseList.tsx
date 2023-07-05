import classes from './CourseList.module.scss'

import { CourseCard, IAboutCourseData } from 'entities/Course'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'

export const CourseList = ({ styles }: ICourseListProps) => {
	const data = [
		{
			id: 1,
			title: 'Python-разработчик с нуля  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 100000,
		},
		{
			id: 2,
			title: 'Профессия: Python-разработчик  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 200000,
		},
		{
			id: 3,
			title: 'Аналитика на PYTHON с 0  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 300000,
		},
		{
			id: 4,
			title: 'Профессия Fullstack-разработчик на Python  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 400000,
		},
		{
			id: 5,
			title: 'Факультет Python-разработки  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 500000,
		},
	]
	return (
		<div className={cn(classes.CourseList, [styles])}>
			<List
				items={data}
				renderItem={(info: IAboutCourseData) => (
					<CourseCard
						key={info.id}
						data={info}
					/>
				)}
				variation={'card'}
			/>
		</div>
	)
}

interface ICourseListProps {
	styles?: string
}
