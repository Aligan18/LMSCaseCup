import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './CreateAnswerPage.module.scss'

import { ITASK_CREATE_ANSWER_Params } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'

import { getTaskData, retrieveTaskReducer, retrieveTaskRequest } from 'entities/Task/TaskData'

import { DynamicModuleLoader, classnames as cn, useAppDispatch } from 'shared/lib'
import { Button, Header, Htag, Icon, TextInput, UploadFile } from 'shared/ui'

export const CreateAnswerPage = ({ styles }: ICreateAnswerPageProps) => {
	const { t } = useTranslation('course')
	const dispatch = useAppDispatch()
	const taskData = useSelector(getTaskData)
	const { list_module_id } = useParams<ITASK_CREATE_ANSWER_Params>()
	useEffect(() => {
		list_module_id && dispatch(retrieveTaskRequest({ list_module_id: Number(list_module_id) }))
	}, [])

	return (
		<DynamicModuleLoader
			reducer={retrieveTaskReducer}
			reducerKey="retrieveTaskData"
		>
			<div className={cn(classes.CreateAnswerPage, [styles])}>
				<BackButton />
				<div className={classes.main}>
					<Header
						title={'Задание №1'}
						buttons={
							<Button
								variation="primary"
								styles={classes.button}
								format={'small'}
							>
								{t('otpravit-reshenie')}
								<Icon
									icon={'done'}
									variation={'white'}
								></Icon>
							</Button>
						}
					/>
					<div className={classes.wrapper}>
						<Htag tag={'small'}>{t('opisanie-zadaniya')}</Htag>
						<div className={classes.upload}>
							<UploadFile />
							<Htag tag={'very-small'}> {t('ili-peretashite-fail-0')}</Htag>
						</div>
						<Htag tag={'small'}>{t('kommentarii-k-zadaniyu')}</Htag>
						<Htag tag={'very-small'}>{t('do-300-simvolov')}</Htag>

						<TextInput styles={classes.your_message}>{t('kommentarii-0')}</TextInput>
					</div>
				</div>
			</div>
		</DynamicModuleLoader>
	)
}
export default CreateAnswerPage

interface ICreateAnswerPageProps {
	styles?: string
}
