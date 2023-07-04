import classes from './CreateCoursePage.module.scss'

import { classnames as cn } from 'shared/lib'

const CreateCoursePage = ({ styles }: ICreateCoursePageProps) => {
	return <div className={cn(classes.CreateCoursePage, [styles])}></div>
}

export default CreateCoursePage

interface ICreateCoursePageProps {
	styles?: string
}
