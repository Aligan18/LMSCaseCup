import axios from 'axios'

import classes from './GoogleAuthButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button } from 'shared/ui'

export const GoogleAuthButton = ({ styles }: IGoogleAuthButtonProps) => {
	console.log(
		`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`,
	)

	const continueWithGoogle = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`,
			)

			window.location.replace(res.data.authorization_url)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className={cn(classes.GoogleAuthButton, [styles])}>
			<Button
				format={'small'}
				onClick={continueWithGoogle}
			>
				Continue With Google
			</Button>
		</div>
	)
}

interface IGoogleAuthButtonProps {
	styles?: string
}
