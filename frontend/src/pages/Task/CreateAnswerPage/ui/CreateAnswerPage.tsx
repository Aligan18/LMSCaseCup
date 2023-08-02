import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './CreateAnswerPage.module.scss'

import { ITASK_CREATE_ANSWER_Params } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'
import { CreateTaskAnswerForm } from 'features/Task/CreateTaskAnswerForm'

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

	const data = [
		{
			title: 'Сделать корреляционный анализ',
			description:
				'Выполните работу, дедлайн до 01.10.2020. 1. Установите, имеется ли корреляционная связь между x и y; определите коэффициент корреляции r: 2. Определите тесноту корреляционной связи. 3. Составьте уравнение регрессии и найдите ожидаемое значение для y при х=18. Решение: Построим график, отложив вдоль оси абсцисс Х величину интрасклерального давления х , а вдоль оси ординат Y – величину внутриглазного давления y.Тогда каждой паре значений х и у на графике будет соответствовать определѐнная точка. По характеру расположения точек можно предположить существование линейной корреляционной связи между х и у',
		},
	]

	return (
<<<<<<< HEAD
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
=======
		<div className={cn(classes.CreateAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<Header
					title={`${data[0].title}`}
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
					<Htag tag={'small'}>{data[0].description}</Htag>
					<Header
						title={`${t('vash-otvet')}`}
						styles={classes.head}
					/>
					<div className={classes.form}>
						<CreateTaskAnswerForm />
>>>>>>> 3f153efd479b506f08ef6ae15dcf77f55a64ddac
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
