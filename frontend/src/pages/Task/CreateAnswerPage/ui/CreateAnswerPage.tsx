import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './CreateAnswerPage.module.scss'

import { ITASK_CREATE_ANSWER_Params } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'
import { DownloadingFileButton } from 'features/DownloadingFileButton'
import { getAdditionsData } from 'features/Lesson/CreateLessonAdditionForm'
import { CreateTaskAnswerForm } from 'features/Task/CreateTaskAnswerForm'

import { getOneGradeData, oneTaskGradeRequest } from 'entities/Grade'
import {
	StudentAnswer,
	getTaskAnswerRequest,
	getTaskData,
	retrieveTaskReducer,
	retrieveTaskRequest,
} from 'entities/Task/TaskData'
import { getUserInfo } from 'entities/Users/CustomUser'

import { DynamicModuleLoader, classnames as cn, useAppDispatch } from 'shared/lib'
import { Button, Header, Htag, Icon, TextInput, UploadFile } from 'shared/ui'

export const CreateAnswerPage = ({ styles }: ICreateAnswerPageProps) => {
	const { t } = useTranslation('course')
	const dispatch = useAppDispatch()
	const { student } = useSelector(getUserInfo)
	const taskData = useSelector(getTaskData)

	const hasGrade = useSelector(getOneGradeData)
	const data = {
		file: [{ file: 'https://www.youtube.com/' }],
	}

	// const data = {
	// 	additions: [{ id: '0', title: 'Презентация', file: 'https://www.youtube.com/' }],
	// }

	const { list_module_id, course_id } = useParams<ITASK_CREATE_ANSWER_Params>()
	useEffect(() => {
		list_module_id && dispatch(retrieveTaskRequest({ list_module_id: Number(list_module_id) }))
		list_module_id &&
			student &&
			dispatch(oneTaskGradeRequest({ listModuleId: Number(list_module_id), studentId: student }))
	}, [])

	useEffect(() => {
		if (hasGrade && student) {
			dispatch(
				getTaskAnswerRequest({
					listModulesId: Number(list_module_id),
					studentId: student,
					courseId: Number(course_id),
				}),
			)
		}
	}, [hasGrade])

	return (
		<DynamicModuleLoader
			reducer={retrieveTaskReducer}
			reducerKey="retrieveTaskData"
		>
			{taskData?.file_task_id && (
				<div className={cn(classes.CreateAnswerPage, [styles])}>
					<BackButton />
					<div className={classes.main}>
						<Header title={taskData?.file_task_id?.title} />
						<div className={classes.wrapper}>
							<div className={classes.message}>
								<Htag tag={'small'}>{taskData?.file_task_id?.description}</Htag>
							</div>
							<div className={classes.download}>
								{/* <DownloadingFileButton data={data.additions} /> */}
							</div>

							<Header
								title={`${t('vash-otvet')}`}
								styles={classes.head}
							/>
							{hasGrade ? (
								<div className={classes.form}>
									<StudentAnswer />
								</div>
							) : (
								<div className={classes.form}>
									<CreateTaskAnswerForm />
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</DynamicModuleLoader>
	)
}

export default CreateAnswerPage

interface ICreateAnswerPageProps {
	styles?: string
}
