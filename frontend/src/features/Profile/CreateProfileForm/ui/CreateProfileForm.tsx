import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import classes from './CreateProfileForm.module.scss'

import { IProfileFormConstructor } from 'entities/Profile/types'
import { ICreateProfileData } from 'entities/Profile/types/Profile.types'

import { classnames as cn } from 'shared/lib'
import { FormConstructor, Header, Hr } from 'shared/ui'

export const CreateProfileForm = ({ styles }: ICreateProfileFormProps) => {
	const { t } = useTranslation('')
	const onSubmit: SubmitHandler<ICreateProfileData> = (formData: ICreateProfileData, event) => {
		event?.preventDefault()

		console.log(formData)
	}

	const data: IProfileFormConstructor[] = [
		{
			title: `${t('foto')}`,
			type: 'file-input',
			key: 'avatar',
		},
		{
			type: 'text-input',
			title: `${t('familiya')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'surname',
			rules: {
				required: true,
				maxLength: 40,
			},
		},
		{
			type: 'text-input',
			title: `${t('imya')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'name',
			rules: {
				required: true,
				maxLength: 40,
			},
		},
		{
			type: 'text-input',
			title: `${t('otchestvo')}`,
			description: `${t('do')}` + 40 + `${t('simvolov')}`,
			key: 'patronymic',
			rules: {
				required: true,
				maxLength: 40,
			},
		},
		{
			type: 'text-input',
			title: `${t('telefon')}`,
			description: `${t('do')}` + 30 + `${t('simvolov')}`,
			key: 'phone',
			rules: {
				required: true,
				maxLength: 40,
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
			rules: {
				required: true,
			},
		},
		{
			type: 'text-input',
			title: `${t('vozrast-0')}`,
			key: 'age',
			rules: {
				required: true,
				maxLength: 3,
			},
		},
		{
			type: 'text-input',
			title: `${t('strana-0')}`,
			description: `${t('do')}` + 80 + `${t('simvolov')}`,
			key: 'country',
			rules: {
				required: true,
				maxLength: 80,
			},
		},
		{
			type: 'text-input',
			title: `${t('universitet-0')}`,
			description: `${t('do')}` + 80 + `${t('simvolov')}`,
			key: 'university',
			rules: {
				required: true,
				maxLength: 80,
			},
		},
	]

	return (
		<div className={cn(classes.CreateProfileForm, [styles])}>
			<div className={classes.wrapper}>
				<Hr />
				<Header title={`${t('redaktirovanie')}`} />
				<FormConstructor<ICreateProfileData>
					onSubmit={onSubmit}
					data={data}
					button={`${t('sokhranit-0')}`}
					styles={classes.form}
				/>
			</div>
		</div>
	)
}

interface ICreateProfileFormProps {
	styles?: string
}
