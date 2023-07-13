import classes from './RegistrationForm.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, CheckBox, Htag, TextInput } from 'shared/ui'

export const RegistrationForm = ({ styles }: IRegistrationFormProps) => {
	return (
		<div className={cn(classes.RegistrationForm, [styles])}>
			<div className={classes.main}>
				<TextInput styles={classes.input}>Введите Email</TextInput>
				<TextInput styles={classes.input}>Введите пароль</TextInput>
				<TextInput styles={classes.input}>Повторите пароль</TextInput>

				<div className={classes.bottom_block}>
					<Button
						variation="primary"
						styles={classes.button}
						format={'small'}
					>
						Регистрация
					</Button>
				</div>
			</div>
		</div>
	)
}

interface IRegistrationFormProps {
	styles?: string
}
