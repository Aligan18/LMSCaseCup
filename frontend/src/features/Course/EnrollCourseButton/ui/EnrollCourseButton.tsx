import classes from './EnrollCourseButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button } from 'shared/ui'

export const EnrollCourseButton = ({ styles }: IEnrollCourseButtonProps) => {
	return <Button styles={styles}>Записаться на курс</Button>
}

interface IEnrollCourseButtonProps {
	styles?: string
}
