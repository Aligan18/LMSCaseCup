import classes from './LessonPage.module.scss'

import { FullLesson } from 'widgets/Lesson/FullLesson'
import { LessonAdditions } from 'widgets/Lesson/LessonAdditions'
import { LessonList } from 'widgets/Lesson/LessonList'

import { classnames as cn } from 'shared/lib'

const LessonPage = ({ styles }: ILessonPageProps) => {
	return (
		<div className={cn(classes.LessonPage, [styles])}>
			<div className={classes.all_lesson}>
				<LessonList />
				<LessonAdditions />
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
