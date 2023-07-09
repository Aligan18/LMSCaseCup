import { useSelector } from 'react-redux'

import classes from './LessonConstructor.module.scss'

import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

import { LessonContentList } from 'features/Lesson/LessonContentList'

import { classnames as cn } from 'shared/lib'
import { Header, YouTubeVideo } from 'shared/ui'

export const LessonConstructor = ({ styles }: ILessonConstructorProps) => {
	const about_lesson = useSelector((state: IStateSchema) => state.createLessonAbout)
	const lesson = useSelector((state: IStateSchema) => state.createLessonContent)

	return (
		<div className={cn(classes.Lesson, [styles])}>
			<Header title={about_lesson.title} />
			<YouTubeVideo video_link={about_lesson.video} />
			<LessonContentList
				editor={true}
				data={lesson}
			/>
		</div>
	)
}

interface ILessonConstructorProps {
	styles?: string
}
