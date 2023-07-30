import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CreateAttendanceRequest } from '../services/CreateAttendanceRequest'
import classes from './CreateAttendanceButton.module.scss'

import { ILESSON_Params } from 'app/providers/AppRouters/config/routeConfig'

import { getUserInfo } from 'entities/Users/CustomUser'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateAttendanceButton = ({ styles }: ICreateAttendanceButtonProps) => {
	const dispatch = useAppDispatch()
	const { course_id, lesson_id, list_module_id } = useParams<ILESSON_Params>()

	const handleClick = () => {
		course_id &&
			list_module_id &&
			dispatch(
				CreateAttendanceRequest({
					course: Number(course_id),
					attendance: true,
					list_modules: Number(list_module_id),
				}),
			)
	}

	return (
		<div className={cn(classes.CreateAttendanceButton, [styles])}>
			<Button onClick={handleClick}> Далее</Button>
		</div>
	)
}

interface ICreateAttendanceButtonProps {
	styles?: string
}
