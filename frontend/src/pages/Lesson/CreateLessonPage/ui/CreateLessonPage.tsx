import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import classes from './CreateLessonPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { LessonConstructor } from 'widgets/Lesson/LessonConstructor'
import { LessonFormSteps } from 'widgets/Lesson/LessonFormSteps'

import { BackButton } from 'features/BackButton'
import { createLessonAboutActions } from 'features/Lesson/CreateLessonAboutForm'
import { createLessonAdditionActions } from 'features/Lesson/CreateLessonAdditionForm'
import { CreateLessonButton } from 'features/Lesson/CreateLessonButton'
import { lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

import { getLectureRequest } from 'entities/Lecture'
import { ILectureData } from 'entities/Lesson/types'

import { classnames as cn, deleteRouteId, useAppDispatch } from 'shared/lib'
import { Header } from 'shared/ui'

const CreateLessonPage = ({ styles }: ICreateLessonPageProps) => {
	const { t } = useTranslation('admin')
	const [isEditor, setIsEditor] = useState(false)
	//const data = useSelector()
	const dispatch = useAppDispatch()
	const location = useLocation()

	useEffect(() => {
		if (deleteRouteId(location.pathname) === deleteRouteId(ERoutePath.EDIT_LESSON)) {
			setIsEditor(true)
			// dispatch(lessonContentActions.change_sort_content(data.lesson))
			// dispatch(createLessonAboutActions.change_about_lesson(data))
			//dispatch(createLessonAdditionActions.)

			const id = Number(location.pathname.split('/').pop())

			dispatch(getLectureRequest(id))
		}
	}, [])

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
