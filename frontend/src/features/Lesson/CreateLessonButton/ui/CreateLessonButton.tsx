import classes from './CreateLessonButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateLessonButton = ({ styles }: ICreateLessonButtonProps) => {
	return <Button styles={cn(classes.CreateLessonButton, [styles])}>Создать</Button>
}

interface ICreateLessonButtonProps {
	styles?: string
}
