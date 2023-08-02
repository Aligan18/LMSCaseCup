import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateTaskAnswerForm.module.scss'

import { ICreateTaskAnswerData, ITaskFormConstructor } from 'entities/Task/types/Task.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateTaskAnswerForm = ({ styles }: ICreateTaskAnswerFormProps) => {
	const { t } = useTranslation('course')

	const onSubmit: SubmitHandler<ICreateTaskAnswerData> = (formData: ICreateTaskAnswerData, event) => {
		event?.preventDefault()

		console.log(formData)
	}

	const data: ITaskFormConstructor[] = [
		{
			type: 'text-input',
			title: `${t('otvet-0')}`,
			key: 'description',
			rules: {
				required: false,
			},
		},
		{
			type: 'file-input',
			key: 'file',
		},
	]

	return (
		<div className={cn(classes.CreateTaskAnswerForm, [styles])}>
			<div className={classes.wrapper}>
				<FormConstructor<ICreateTaskAnswerData>
					onSubmit={onSubmit}
					data={data}
					button={`${t('sokhranit')}`}
					styles={classes.form}
				/>
			</div>
		</div>
	)
}

interface ICreateTaskAnswerFormProps {
	styles?: string
}
