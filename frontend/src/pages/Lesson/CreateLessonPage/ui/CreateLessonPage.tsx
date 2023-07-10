import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import classes from './CreateLessonPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { LessonConstructor } from 'widgets/Lesson/LessonConstructor'
import { LessonFormSteps } from 'widgets/Lesson/LessonFormSteps'

import { BackButton } from 'features/BackButton'
import { createLessonAboutActions } from 'features/Lesson/CreateLessonAboutForm'
import { CreateLessonButton } from 'features/Lesson/CreateLessonButton'
import { lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

import { ILessonData } from 'entities/Lesson/types'

import { classnames as cn, deleteRouteId } from 'shared/lib'
import { Header } from 'shared/ui'

const CreateLessonPage = ({ styles }: ICreateLessonPageProps) => {
	const { t } = useTranslation('admin')
	const [isEditor, setIsEditor] = useState(false)
	const data: ILessonData = {
		id: 1,
		number: 5,
		description: 'Введение в программирование',
		title: 'Введение в программирование',
		video: 'https://www.youtube.com/embed/i-uvtDKeFgE',
		additions: [
			{ id: 1, title: 'Презентация', file: 'https://www.youtube.com/' },
			{ id: 2, title: 'Регламент', file: 'https://www.youtube.com/' },
			{ id: 3, title: 'Книга', file: 'https://www.youtube.com/' },
		],

		lesson: [
			{
				id: 1,
				order: 1,
				title: 'Python Install',
				type: 'text',
				content: `Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, 
					search in the start bar for Python or run the following on the Command Line (cmd.exe):
					To play your video on a web page, do the following:

						Upload the video to YouTube
						Take a note of the video id
						Define an <iframe> element in your web page
						Let the src attribute point to the video URL
						Use the width and height attributes to specify the dimension of the player
						Add any other parameters to the URL (see below)`,
			},
			{
				id: 2,
				order: 2,
				title: null,
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 3,
				order: 3,
				title: null,
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 4,
				order: 4,
				title: 'Python',
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 5,
				order: 5,
				title: null,
				type: 'code',
				content: 'C:UsersYour Name>python --version',
			},
		],
	}
	const despatch = useDispatch()
	const location = useLocation()

	useEffect(() => {
		if (deleteRouteId(location.pathname) === deleteRouteId(ERoutePath.EDIT_LESSON)) {
			setIsEditor(true)
			despatch(lessonContentActions.change_sort_content(data.lesson))
			despatch(createLessonAboutActions.change_about_lesson(data))
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
