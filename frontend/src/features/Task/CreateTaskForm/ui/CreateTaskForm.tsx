import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateTaskForm.module.scss'

import { ICreateTaskData, ITaskFormConstructor } from 'entities/Task/types/Task.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateTaskForm = ({ styles }: ICreateTaskFormProps) => {
	const { t } = useTranslation('course')

	const onSubmit: SubmitHandler<ICreateTaskData> = (formData: ICreateTaskData, event) => {
		event?.preventDefault()

		console.log(formData)
	}

	const data: ITaskFormConstructor[] = [
		{
			type: 'input',
			title: `${t('nazvanie-zadaniya')}`,
			description: `${t('do-0')}` + 200 + `${t('simvolov-0')}`,
			key: 'title',
			rules: {
				required: true,
				maxLength: 200,
			},
		},
		{
			type: 'text-input',
			title: `${t('zadanie')}`,
			key: 'description',
			rules: {
				required: true,
			},
		},
	]

	return (
		<div className={cn(classes.CreateTaskForm, [styles])}>
			<div className={classes.wrapper}>
				<FormConstructor<ICreateTaskData>
					onSubmit={onSubmit}
					data={data}
					button={`${t('sokhranit')}`}
					styles={classes.form}
				/>
			</div>
		</div>
	)
}

interface ICreateTaskFormProps {
	styles?: string
}
