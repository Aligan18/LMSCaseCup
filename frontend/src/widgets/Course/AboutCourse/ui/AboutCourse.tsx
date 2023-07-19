import classes from './AboutCourse.module.scss'

import { EnrollCourseButton } from 'features/Course/EnrollCourseButton'

import { CourseMiniCard } from 'entities/Course/CourseMiniCard'
import { IAboutCourseData } from 'entities/Course/types'

import { classnames as cn } from 'shared/lib'

export const AboutCourse = ({ styles, data }: IAboutCourseProps) => {
	return (
		<div className={cn(classes.AboutCourse, [styles])}>
			<CourseMiniCard data={data} />
			<EnrollCourseButton />
		</div>
	)
}

interface IAboutCourseProps {
	styles?: string
	data: IAboutCourseData
}
