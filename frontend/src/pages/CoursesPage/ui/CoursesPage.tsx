import classes from './CoursesPage.module.scss'

import { classnames as cn } from 'shared/lib'

export const CoursesPage = ({ styles }: ICoursesPageProps) => {
	return <div className={cn(classes.CoursesPage, [styles])}></div>
}

interface ICoursesPageProps {
	styles?: string
}
