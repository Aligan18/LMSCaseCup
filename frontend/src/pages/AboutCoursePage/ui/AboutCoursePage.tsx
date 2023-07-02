import classes from './AboutCoursePage.module.scss'

import { CourseProgram } from 'widgets/CourseProgram'

import { classnames as cn } from 'shared/lib'

const AboutCoursePage = ({ styles }: IAboutCoursePageProps) => {
	return (
		<div className={cn(classes.AboutCoursePage, [styles])}>
			<CourseProgram />
		</div>
	)
}

export default AboutCoursePage

interface IAboutCoursePageProps {
	styles?: string
}
