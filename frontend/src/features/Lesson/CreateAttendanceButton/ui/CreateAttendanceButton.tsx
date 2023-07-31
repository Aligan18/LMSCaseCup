import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useListModuleFindId } from '../lib/useListModuleFindId'
import { CreateAttendanceRequest } from '../services/CreateAttendanceRequest'
import classes from './CreateAttendanceButton.module.scss'

import { ERoutePath, ILESSON_Params } from 'app/providers/AppRouters/config/routeConfig'

import { useLastAttendance } from 'entities/Grade'
import { getUserInfo } from 'entities/Users/CustomUser'

import { classnames as cn, setParamsInPath, useAppDispatch } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateAttendanceButton = ({ styles }: ICreateAttendanceButtonProps) => {
	const dispatch = useAppDispatch()

	const { course_id, module_index, list_module_id } = useParams<ILESSON_Params>()
	const { lastAttendance } = useLastAttendance(Number(module_index))
	const nextAndPrevious = useListModuleFindId(Number(module_index), Number(list_module_id))
	const navigate = useNavigate()
	console.log('nextAndPrevious', nextAndPrevious)
	const handleClick = () => {
		if (course_id && list_module_id && nextAndPrevious) {
			console.log('LIST_MODULE', lastAttendance, Number(list_module_id))
			if (lastAttendance?.list_modules.id === Number(list_module_id) || lastAttendance === null) {
				dispatch(
					CreateAttendanceRequest({
						course: Number(course_id),
						attendance: true,
						list_modules: Number(list_module_id),
						navigate: () =>
							navigate(
								setParamsInPath<ILESSON_Params>(ERoutePath.LESSON, {
									course_id,
									list_module_id: String(nextAndPrevious.next.id),
									module_index: String(module_index),
								}),
							),
					}),
				)
			} else {
				console.log('NAVIGATE')
				navigate(
					setParamsInPath<ILESSON_Params>(ERoutePath.LESSON, {
						course_id,
						list_module_id: String(nextAndPrevious.next.id),
						module_index: String(module_index),
					}),
				)
			}
		}
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
