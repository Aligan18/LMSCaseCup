import classes from './LessonPage.module.scss'

import { LessonList } from 'widgets/Lesson'
import { FullLesson } from 'widgets/Lesson/FullLesson'

import { classnames as cn } from 'shared/lib'

const LessonPage = ({ styles }: ILessonPageProps) => {
	return (
		<div className={cn(classes.LessonPage, [styles])}>
			<div className={classes.all_lesson}>
				<LessonList />
			</div>

			<div className={classes.full_lesson}>
				<FullLesson />
			</div>
		</div>
	)
}

export default LessonPage

interface ILessonPageProps {
	styles?: string
}
