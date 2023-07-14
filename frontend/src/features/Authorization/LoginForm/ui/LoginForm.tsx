import classes from './LoginForm.module.scss'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { classnames as cn } from 'shared/lib'
import { Button, CheckBox, Htag, Icon, ListItem, TextInput } from 'shared/ui'

export const LoginForm = ({ styles }: ILoginFormProps) => {
	return (
		<div className={cn(classes.LoginForm, [styles])}>
			<div className={classes.main}>
				<TextInput styles={classes.email}>Введите Email</TextInput>
				<div className={classes.password}>
					<TextInput>Введите пароль</TextInput>
					<Htag tag={'very-small'}>Забыли пароль?</Htag>
				</div>
				<div className={classes.bottom_block}>
					<CheckBox title={'Запомнить меня'} />
					<div className={classes.flex}>
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							Вход
						</Button>
						<GoogleAuthButton />
					</div>
				</div>
			</div>
		</div>
	)
}

interface ILoginFormProps {
	styles?: string
}
