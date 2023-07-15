import { BaseSyntheticEvent } from 'react'

import classes from './LoginForm.module.scss'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { ICreateLoginData, ILoginFormConstructor } from 'entities/Authorization/types'

import { classnames as cn } from 'shared/lib'
import { Button, CheckBox, FormConstructor, Htag } from 'shared/ui'

export const LoginForm = ({ styles }: ILoginFormProps) => {
	const onSubmit = (formData: ICreateLoginData, event: BaseSyntheticEvent) => {
		event.preventDefault()

		console.log(formData)
	}

	const loginForm: ILoginFormConstructor[] = [
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
				validate: 'email',
			},
		},
		{
			type: 'check-box',
			key: 'rememberMe',
			description: 'Запомнить меня',
			rules: {
				required: false,
			},
		},
	]

	return (
		<div className={cn(classes.LoginForm, [styles])}>
			<div className={classes.main}>
				<FormConstructor
					onSubmit={onSubmit}
					data={loginForm}
					button={
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							Вход
						</Button>
					}
				/>
				<div className={classes.bottom_block}>
					<Htag tag={'very-small'}>Забыли пароль?</Htag>

					<GoogleAuthButton />
				</div>
			</div>
		</div>
	)
}

interface ILoginFormProps {
	styles?: string
}
