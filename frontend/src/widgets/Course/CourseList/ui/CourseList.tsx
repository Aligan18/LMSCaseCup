import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import classes from './CourseList.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { CourseCard } from 'entities/Course/CourseCard'
import { getListCourseData, listCourseRequest } from 'entities/Course/CourseData'
import { IAboutCourseData } from 'entities/Course/types'

import { classnames as cn, deleteRouteId, useAppDispatch } from 'shared/lib'
import { Button, Icon, List } from 'shared/ui'

export const CourseList = ({ styles }: ICourseListProps) => {
	const { t } = useTranslation('course')
	const data = useSelector(getListCourseData)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(listCourseRequest())
	}, [])

	// const data = [
	// 	{
	// 		id: 1,
	// 		title: 'Python-разработчик с нуля  ',
	// 		description:
	// 			'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
	// 		price: 100000,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Профессия: Python-разработчик  ',
	// 		description:
	// 			'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
	// 		price: 200000,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Аналитика на PYTHON с 0  ',
	// 		description:
	// 			'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
	// 		price: 300000,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Профессия Fullstack-разработчик на Python  ',
	// 		description:
	// 			'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
	// 		price: 400000,
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'Факультет Python-разработки  ',
	// 		description:
	// 			'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
	// 		price: 500000,
	// 	},
	// ]
	return (
		<div className={cn(classes.CourseList, [styles])}>
			{data && (
				<List
					items={data}
					renderItem={(info: IAboutCourseData) => (
						<CourseCard
							key={info.id}
							data={info}
							buttons={
								<Link to={deleteRouteId(ERoutePath.ABOUT_COURSE) + info.id}>
									<Button
										variation="clear"
										styles={classes.button}
										format={'small'}
									>
										{t('podrobnee-0')}
										<Icon
											variation={'primary'}
											icon={'link'}
										/>
									</Button>
								</Link>
							}
						/>
					)}
					variation={'card'}
				/>
			)}
		</div>
	)
}

interface ICourseListProps {
	styles?: string
}
