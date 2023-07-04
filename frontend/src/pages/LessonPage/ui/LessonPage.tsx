import classes from './LessonPage.module.scss'

import { LessonList } from 'widgets/Lesson'

import { classnames as cn } from 'shared/lib'

const LessonPage = ({ styles }: ILessonPageProps) => {
	return (
		<div className={cn(classes.LessonPage, [styles])}>
			<LessonList />
		</div>
	)
}

export default LessonPage

interface ILessonPageProps {
	styles?: string
}
