import classes from './AfterRegistrationPage.module.scss'

import { classnames as cn } from 'shared/lib'
import { Htag } from 'shared/ui'

export const AfterRegistrationPage = ({ styles }: IAfterRegistrationPageProps) => {
	return (
		<div className={cn(classes.AfterRegistrationPage, [styles])}>
			<div className={classes.text}>
				<Htag tag={'very-large'}>На Вашу почту отправлено письмо</Htag>
				<Htag
					tag={'medium'}
					styles={classes.small_text}
				>
					Для завершения регистрации активируйте аккаунт
				</Htag>
			</div>
		</div>
	)
}
export default AfterRegistrationPage

interface IAfterRegistrationPageProps {
	styles?: string
}
