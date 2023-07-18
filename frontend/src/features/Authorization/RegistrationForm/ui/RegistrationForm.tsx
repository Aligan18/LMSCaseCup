import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { getRegistrationErrors } from '../model/selectors/getRegistrationErrors'
import { getRegistrationLoading } from '../model/selectors/getRegistrationLoading'
import { registrationFormSliceActions } from '../model/slice/RegistrationFormSlice'
import { registartionByEmail } from '../services/RegistrationByEmail'
import classes from './RegistrationForm.module.scss'

import { ICreateRegistrationData, IRegistrationFormConstructor } from 'entities/Authorization/types'
import { ICustomUserType } from 'entities/Users/CustomUser/types/CustomUser.type'

import { classnames as cn, useAppDispatch } from 'shared/lib'
import { Button, ErrorText, FormConstructor, Htag, LoadingDiv } from 'shared/ui'

export const RegistrationForm = ({ styles }: IRegistrationFormProps) => {
	const dispatch = useAppDispatch()
	const onSubmit: SubmitHandler<ICreateRegistrationData> = (
		formData: ICreateRegistrationData,
		event,
	) => {
		event?.preventDefault()
		dispatch(registrationFormSliceActions.setName(formData.name))
		dispatch(registrationFormSliceActions.setName(formData.surname))
		formData.type = userType
		dispatch(registartionByEmail(formData))
	}

	const isLoading = useSelector(getRegistrationLoading)
	const error = useSelector(getRegistrationErrors)
	const [userType, setUserType] = useState<ICustomUserType>('4')

	const registrationForm: IRegistrationFormConstructor[] = [
		{
			type: 'input',
			key: 'name',
			title: 'Введите имя ',
			rules: {
				required: true,
			},
		},
		{
			type: 'input',
			key: 'surname',
			title: 'Введите фамилию',
			rules: {
				required: true,
			},
		},
		{
			type: 'input',
			key: 'email',
			title: 'Введите Email',
			rules: {
				required: true,
			},
		},
		{
			type: 'input',
			key: 'password',
			title: 'Введите пароль',
			rules: {
				required: true,
				minLength: 8,
			},
		},
		{
			type: 'input',
			key: 're_password',
			title: 'Повторите пароль',
			rules: {
				required: true,
				minLength: 8,
				validate: 'password',
			},
		},
	]

	return (
		<div className={cn(classes.RegistrationForm, [styles])}>
			<div className={classes.main}>
				<div className={classes.top}>
					<Htag tag="small">Зарегистрироваться как :</Htag>
					<div>
						<Button
							onClick={() => setUserType('4')}
							variation={userType === '4' ? 'primary' : 'clear'}
						>
							Студент
						</Button>
						<Button
							onClick={() => setUserType('3')}
							variation={userType === '3' ? 'primary' : 'clear'}
						>
							Учитель
						</Button>
					</div>
				</div>

				<FormConstructor
					isLoading={isLoading}
					serverError={error}
					onSubmit={onSubmit}
					data={registrationForm}
					button={'Регистрация'}
				/>
			</div>
		</div>
	)
}

interface IRegistrationFormProps {
	styles?: string
}
