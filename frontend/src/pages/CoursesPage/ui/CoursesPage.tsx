import { useTranslation } from 'react-i18next'

import classes from './CoursesPage.module.scss'

import { CourseCard } from 'entities/CourseCard'

import { classnames as cn } from 'shared/lib'
import { Htag } from 'shared/ui/Htag/Htag'
import { Courses } from 'shared/ui/Icon/Icon.stories'

const CoursesPage = ({ styles }: ICoursesPageProps) => {
	const { t } = useTranslation()
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
		<div className={cn(classes.CoursesPage, [styles])}>
			<div className={classes.title}>
				<Htag tag="large">{t('vse-kursy')}</Htag>
			</div>
			<div className={cn(classes.list)}>
				{data.map((info) => (
					<CourseCard
						key={info.id}
						data={info}
					/>
				))}
			</div>
		</div>
	)
}

export default CoursesPage

interface ICoursesPageProps {
	styles?: string
}
