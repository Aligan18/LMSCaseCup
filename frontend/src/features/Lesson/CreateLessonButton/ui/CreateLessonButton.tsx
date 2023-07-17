import { useSelector } from 'react-redux'

import { createLessonRequest } from '../services/CreateLessonRequest'
import classes from './CreateLessonButton.module.scss'

import { getLessonAbout } from 'features/Lesson/CreateLessonAboutForm'
import { getAdditionsData } from 'features/Lesson/CreateLessonAdditionForm'
import { getLessonContents } from 'features/Lesson/CreateLessonContentForm'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateLessonButton = ({ styles }: ICreateLessonButtonProps) => {
	const dispatch = useAppDispatch()
	const about = useSelector(getLessonAbout)
	const additions = useSelector(getAdditionsData)
	const contents = useSelector(getLessonContents)

	const handleClick = () => {
		dispatch(createLessonRequest({ about, additions, contents }))
	}

	return (
		<Button
			onClick={handleClick}
			styles={cn(classes.CreateLessonButton, [styles])}
		>
			Создать
		</Button>
	)
}

interface ICreateLessonButtonProps {
	styles?: string
}
