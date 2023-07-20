import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './CreateLessonPage.module.scss'

import { IEDIT_LESSON_Params } from 'app/providers/AppRouters/config/routeConfig'

import { LessonConstructor } from 'widgets/Lesson/LessonConstructor'
import { LessonFormSteps } from 'widgets/Lesson/LessonFormSteps'

import { BackButton } from 'features/BackButton'
import {
	CreateLessonButton,
	getCreateLessonError,
	getCreateLessonLoading,
} from 'features/Lesson/CreateLessonButton'

import { getLectureRequest } from 'entities/Lecture'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { ErrorText, Header } from 'shared/ui'

const CreateLessonPage = ({ styles }: ICreateLessonPageProps) => {
	const { t } = useTranslation('admin')
	const [isEditor, setIsEditor] = useState(false)
	const error = useSelector(getCreateLessonError)
	const isLoading = useSelector(getCreateLessonLoading)
	//const data = useSelector()
	const { course_id, lesson_id } = useParams<IEDIT_LESSON_Params>()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (course_id && lesson_id) {
			setIsEditor(true)
			dispatch(getLectureRequest(Number(lesson_id)))
		}
	}, [course_id, lesson_id])

	return (
		<div className={cn(classes.CreateLessonPage, [styles])}>
			<div className={classes.form}>
				{isEditor ? (
					<Header
						styles={classes.header}
						title={'Редактирование лекции'}
						buttons={<CreateLessonButton />}
					/>
				) : (
					<Header
						title={'Создание лекции'}
						buttons={<CreateLessonButton />}
					/>
				)}
				{error && <ErrorText>{error}</ErrorText>}
				<LessonFormSteps />
			</div>
			<div className={classes.lesson}>
				<BackButton />

				<LessonConstructor />
			</div>
		</div>
	)
}

export default CreateLessonPage
interface ICreateLessonPageProps {
	styles?: string
}
