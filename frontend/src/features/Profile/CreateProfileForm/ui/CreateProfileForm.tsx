import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateProfileForm.module.scss'

import { FileUploader } from 'entities/FileUploader'
import { IProfileFormConstructor } from 'entities/Profile/types'
import { ICreateProfileData } from 'entities/Profile/types/Profile.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor, Header, Hr } from 'shared/ui'

export const CreateProfileForm = ({ styles }: ICreateProfileFormProps) => {
	const { t } = useTranslation('')
	const [image, setImage] = useState<File | undefined | null>()
	const onSubmit: SubmitHandler<ICreateProfileData> = (formData: ICreateProfileData, event) => {
		event?.preventDefault()

		console.log(formData)
	}

	const data: IProfileFormConstructor[] = [
		{
			type: 'input',
			title: `${t('familiya')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'surname',
			rules: {
				required: true,
				maxLength: 40,
			},
		},
		{
			type: 'input',
			title: `${t('imya')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'name',
			rules: {
				required: true,
				maxLength: 40,
			},
		},
		{
			type: 'input',
			title: `${t('otchestvo')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'patronymic',
			rules: {
				maxLength: 40,
			},
		},
		{
			type: 'input',
			title: `${t('telefon')}`,

			key: 'phone',
			rules: {
				maxLength: 12,
				pattern: 'number',
			},
		},
		{
			type: 'text-input',
			title: `${t('o-sebe')}`,
			key: 'about',
			rules: {
				required: false,
			},
		},
		{
			type: 'selector',
			options: [
				{ title: `${t('muzhskoi')}`, value: '1' },
				{ title: `${t('zhenskii')}`, value: '2' },
			],
			title: `${t('pol-0')}`,
			key: 'sex',
			rules: {},
		},
		{
			type: 'input',
			title: `${t('vozrast-0')}`,
			key: 'age',
			rules: {
				maxLength: 2,
				pattern: 'number',
			},
		},
		{
			type: 'input',
			title: `${t('strana-0')}`,
			description: `${t('do')}` + 80 + `${t('simvolov')}`,
			key: 'country',
			rules: {
				maxLength: 80,
			},
		},
		{
			type: 'input',
			title: `${t('universitet-0')}`,
			description: `${t('do')}` + 80 + `${t('simvolov')}`,
			key: 'university',
			rules: {
				maxLength: 80,
			},
		},
	]

	return (
		<div className={cn(classes.CreateProfileForm, [styles])}>
			<div className={classes.wrapper}>
				<FormConstructor<ICreateProfileData>
					onSubmit={onSubmit}
					data={data}
					button={`${t('sokhranit-0')}`}
					styles={classes.form}
				/>
			</div>
			<div>
				<FileUploader
					title="Фото профиля"
					setImage={setImage}
					image={image}
				/>
			</div>
		</div>
	)
}

interface ICreateProfileFormProps {
	styles?: string
}
