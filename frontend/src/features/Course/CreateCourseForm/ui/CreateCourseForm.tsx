import { BaseSyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './CreateCourseForm.module.scss'

import { ICourseFormConstructor, ICreateCourseData } from 'entities/Course/types/Course.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor, Icon } from 'shared/ui'

export const CreateCourseForm = ({ styles }: ICreateCourseFormProps) => {
	const { t } = useTranslation('course')

	const onSubmit = (formData: ICreateCourseData, event: BaseSyntheticEvent) => {
		event.preventDefault()
		console.log(formData)
	}

	const data: ICourseFormConstructor[] = [
		{
			type: 'input',
			title: `${t('nazvanie-kursa')}`,
			description: `${t('do-20-simvolov-0')}`,
			key: 'title',
			rules: {
				required: true,
				maxLength: 20,
			},
		},
		{
			type: 'text-input',
			title: `${t('opisanie-kursa')}`,
			description: `${t('do-80-simvolov')}`,
			key: 'description',
			rules: {
				required: true,
				maxLength: 80,
			},
		},
		{
			type: 'selector',
			options: [
				{ title: '1 ' + `${t('mesyac')}`, value: '1' },
				{ title: '2 ' + `${t('mesyaca-0')}`, value: '2' },
			],
			title: `${t('dlitelnost-kursa')}`,
			key: 'course_duration',
			rules: {
				required: true,
			},
		},
		{
			type: 'selector',
			options: [
				{ title: `${t('razrabotka')}`, value: '1' },
				{ title: 'Дизайн', value: '2' },
			],
			title: `${t('napravlenie-obucheniya')}`,
			key: 'category',
			rules: {
				required: true,
			},
		},
	]

	return (
		<div className={cn(classes.CreateCourseForm, [styles])}>
			{' '}
			<FormConstructor
				onSubmit={onSubmit}
				data={data}
				button={
					<>
						{t('sokhranit')}
						<Icon
							variation={'secondary'}
							icon={'save'}
						/>
					</>
				}
			/>
		</div>
	)
}

interface ICreateCourseFormProps {
	styles?: string
}
