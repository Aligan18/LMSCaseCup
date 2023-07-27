import { useSelector } from 'react-redux'

import classes from './AboutCourse.module.scss'

import { EnrollCourseButton } from 'features/Course/EnrollCourseButton'

import { CourseMiniCard } from 'entities/Course/CourseMiniCard'
import { IAboutCourseData } from 'entities/Course/types'
import { getUserType } from 'entities/Users/CustomUser'

import { classnames as cn } from 'shared/lib'

export const AboutCourse = ({ styles, data }: IAboutCourseProps) => {
	const user = useSelector(getUserType)
	return (
		<div className={cn(classes.AboutCourse, [styles])}>
			<CourseMiniCard data={data} />
			{user !== 'admin' && user !== 'super-admin' && user !== 'teacher' && <EnrollCourseButton />}
		</div>
	)
}

interface IAboutCourseProps {
	styles?: string
	data: IAboutCourseData
}
