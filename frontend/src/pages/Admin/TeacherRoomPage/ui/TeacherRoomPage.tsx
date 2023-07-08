import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './TeacherRoomPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { AboutCourse } from 'widgets/Course/AboutCourse'
import { CourseList } from 'widgets/Course/CourseList'

import { AddCourseCard } from 'entities/Course/AddCourseCard'
import { CourseCard } from 'entities/Course/CourseCard'
import { IAboutCourseData } from 'entities/Course/types'

import { classnames as cn, deleteRouteId } from 'shared/lib'
import { Button, Htag, Icon, List } from 'shared/ui'

export const TeacherRoomPage = ({ styles }: ITeacherRoomPageProps) => {
	const { t } = useTranslation('admin')

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
			title: 'Python-разработчик с нуля  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 1200000,
		},
		{
			id: 2,
			title: 'Python-разработчик с нуля  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 1200000,
		},
		{
			id: 1,
			title: 'Python-разработчик с нуля  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 100000,
		},
		{
			id: 2,
			title: 'Python-разработчик с нуля  ',
			description:
				'Разработчик на Python создает сайты и приложения, которыми вы пользуетесь каждый день.',
			price: 1200000,
		},
	]
	return (
		<div className={cn(classes.TeacherRoomPage, [styles])}>
			<div className={classes.course_card}>
				<div className={classes.title}>
					<Htag tag="large">{t('kursy-0')}</Htag>
				</div>
				<List
					items={data}
					variation={'card'}
					renderItem={(info: IAboutCourseData) => (
						<CourseCard
							key={info.id}
							data={info}
							buttons={
								<>
									<Link to={deleteRouteId(ERoutePath.ABOUT_COURSE) + info.id}>
										<Button
											variation="clear"
											styles={classes.button}
											format={'small'}
										>
											{t('prosmotr')}
											<Icon
												variation={'primary'}
												icon={'link'}
											/>
										</Button>
									</Link>
									<Link to={deleteRouteId(ERoutePath.ABOUT_COURSE) + info.id}>
										<Button
											variation="clear"
											styles={classes.button}
											format={'small'}
										>
											Просмотр групп
											<Icon
												variation={'primary'}
												icon={'link'}
											/>
										</Button>
									</Link>
									<Link to={deleteRouteId(ERoutePath.ABOUT_COURSE) + info.id}>
										<Button
											variation="clear"
											styles={classes.button}
											format={'small'}
										>
											Редактировать
											<Icon
												variation={'primary'}
												icon={'link'}
											/>
										</Button>
									</Link>
								</>
							}
						/>
					)}
				/>
				<AddCourseCard />
			</div>
		</div>
	)
}
export default TeacherRoomPage

interface ITeacherRoomPageProps {
	styles?: string
}
