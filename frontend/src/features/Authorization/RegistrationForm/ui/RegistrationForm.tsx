import { BaseSyntheticEvent } from 'react'

import classes from './RegistrationForm.module.scss'

import { ICreateRegistrationData, IRegistrationFormConstructor } from 'entities/Authorization/types'

import { classnames as cn } from 'shared/lib'
import { Button, CheckBox, FormConstructor, Htag, TextInput } from 'shared/ui'

export const RegistrationForm = ({ styles }: IRegistrationFormProps) => {
	const onSubmit = (formData: ICreateRegistrationData, event: BaseSyntheticEvent) => {
		event.preventDefault()

		console.log(formData)
	}

	const registrationForm: IRegistrationFormConstructor[] = [
		{
			type: 'input',
			key: 'email',
			title: 'Введите Email',
			rules: {
				required: true,
				pattern: 'email',
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
			key: 'confirm_password',
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
				<FormConstructor
					onSubmit={onSubmit}
					data={registrationForm}
					button={
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							Регистрация
						</Button>
					}
				/>
			</div>
		</div>
	)
}

interface IRegistrationFormProps {
	styles?: string
}
