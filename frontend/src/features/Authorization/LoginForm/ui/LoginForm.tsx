import { BaseSyntheticEvent, useCallback, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getLoginState } from '../model/selectors/getLoginState/getLoginState'
import { loginByEmail } from '../services/loginByEmail/LoginByEmail'
import classes from './LoginForm.module.scss'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { ICreateLoginData, ILoginFormConstructor } from 'entities/Authorization/types'
import { getFullUserState, getUserInfo } from 'entities/Users/CustomUser'
import { getUserType } from 'entities/Users/CustomUser/lib/getUserType'

import { useAppDispatch } from 'shared/lib'
import { classnames as cn } from 'shared/lib'
import { Button, ErrorText, FormConstructor, Htag, Loader, LoadingDiv } from 'shared/ui'

export const LoginForm = ({ styles }: ILoginFormProps) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { error, isLoading } = useSelector(getLoginState)
	const { userType } = useSelector(getFullUserState)
	const { t } = useTranslation('admin')

	const onSubmit: SubmitHandler<ICreateLoginData> = useCallback(
		(formData: ICreateLoginData, event) => {
			event?.preventDefault()
			dispatch(loginByEmail(formData))
		},
		[dispatch],
	)

	// useEffect(() => {
	// 	if (userType) {
	// 		navigate(-1)
	// 	}
	// }, [userType])

	const loginForm: ILoginFormConstructor[] = [
		{
			type: 'input',
			key: 'email',
			title: `${t('vvedite-email')}`,
			rules: {
				required: true,
				pattern: 'email',
			},
		},
		{
			type: 'input',
			key: 'password',
			title: `${t('vvedite-parol')}`,
			rules: {
				required: true,
				minLength: 8,
			},
		},
		{
			type: 'check-box',
			key: 'rememberMe',
			description: `${t('zapomnit-menya')}`,
			rules: {
				required: false,
			},
		},
	]

	return (
		<div className={cn(classes.LoginForm, [styles])}>
			<div className={classes.main}>
				<FormConstructor<ICreateLoginData>
					isLoading={isLoading}
					serverError={error}
					disabled={isLoading}
					onSubmit={onSubmit}
					data={loginForm}
					button={`${t('vkhod')}`}
				/>

				<div className={classes.bottom_block}>
					<Htag tag={'very-small'}>{t('zabyli-parol')}</Htag>

					<GoogleAuthButton />
				</div>
			</div>
		</div>
	)
}

interface ILoginFormProps {
	styles?: string
}
