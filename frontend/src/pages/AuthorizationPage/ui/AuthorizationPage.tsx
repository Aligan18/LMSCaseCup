import classes from './AuthorizationPage.module.scss'

import { LoginForm } from 'features/Authorization/LoginForm'
import { RegistrationForm } from 'features/Authorization/RegistrationForm'
import { BackButton } from 'features/BackButton'
import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { classnames as cn } from 'shared/lib'
import { Button, CheckBox, Header, Htag, Icon, ListItem, TextInput } from 'shared/ui'

export const AuthorizationPage = ({ styles }: IAuthorizationPageProps) => {
	return (
		<div className={cn(classes.AuthorizationPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<div className={classes.top_block}>
					<ListItem
						hover={'hover_inverted-secondary'}
						variation={'clear'}
						left={<Icon icon="lock" />}
						styles={classes.top_button}
					>
						Вход
					</ListItem>
					<ListItem
						hover={'hover_inverted-secondary'}
						variation={'clear'}
						left={<Icon icon="plus" />}
						styles={classes.top_button}
					>
						Регистрация
					</ListItem>
				</div>
				<LoginForm />
				<RegistrationForm />
				<GoogleAuthButton />
			</div>
		</div>
	)
}
export default AuthorizationPage

interface IAuthorizationPageProps {
	styles?: string
}
