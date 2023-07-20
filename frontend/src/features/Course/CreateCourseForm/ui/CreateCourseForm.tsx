import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getCreateCourseError } from '../model/selectors/getCreateCourseError'
import { getCreateCourseLoading } from '../model/selectors/getCreateCourseLoading'
import { getCreateCourseSuccessful } from '../model/selectors/getCreateCourseSuccessful'
import { createCourseRequest } from '../services/CreateCourseRequest'
import classes from './CreateCourseForm.module.scss'

import { ICourseFormConstructor, ICreateCourseData } from 'entities/Course/types/Course.types'
import { FileUploader } from 'entities/FileUploader'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { FormConstructor, Icon } from 'shared/ui'

export const CreateCourseForm = ({ styles }: ICreateCourseFormProps) => {
	const { t } = useTranslation('course')
	const isLoading = useSelector(getCreateCourseLoading)
	const error = useSelector(getCreateCourseError)
	const successful = useSelector(getCreateCourseSuccessful)
	const dispatch = useAppDispatch()
	const [image, setImage] = useState<File | undefined | null>(undefined)

	const onSubmit: SubmitHandler<ICreateCourseData> = (formData: ICreateCourseData, event) => {
		if (image) {
			event?.preventDefault()
			formData.image = image
			console.log(formData)
			dispatch(createCourseRequest(formData))
		}
	}

	const data: ICourseFormConstructor[] = [
		{
			type: 'input',
			title: `${t('nazvanie-kursa')}`,
			description: `${t('do-20-simvolov-0')}`,
			key: 'title',
			rules: {
				required: true,
				maxLength: 35,
			},
		},
		{
			type: 'text-input',
			title: `${t('opisanie-kursa')}`,
			description: `${t('do-80-simvolov')}`,
			key: 'description',
			rules: {
				required: true,
				maxLength: 120,
			},
		},
		// {
		// 	type: 'selector',
		// 	options: [
		// 		{ title: '1 ' + `${t('mesyac')}`, value: '1' },
		// 		{ title: '2 ' + `${t('mesyaca-0')}`, value: '2' },
		// 	],
		// 	title: `${t('dlitelnost-kursa')}`,
		// 	key: 'course_duration',
		// 	rules: {
		// 		required: true,
		// 	},
		// },
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
		{
			type: 'input',
			title: 'Цена',
			key: 'price',
			rules: {
				required: true,
				pattern: 'number',
			},
		},
	]

	return (
		<div className={cn(classes.CreateCourseForm, [styles])}>
			<div className={classes.left_block}>
				<FormConstructor<ICreateCourseData>
					successful={successful}
					serverError={error}
					isLoading={isLoading}
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
			<div>
				<FileUploader
					setImage={setImage}
					image={image}
				/>
			</div>
		</div>
	)
}

interface ICreateCourseFormProps {
	styles?: string
}
