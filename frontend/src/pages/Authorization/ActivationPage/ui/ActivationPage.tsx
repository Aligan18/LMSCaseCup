import { Link } from 'react-router-dom'

import classes from './ActivationPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon } from 'shared/ui'

export const ActivationPage = ({ styles }: IActivationPageProps) => {
	return (
		<div className={cn(classes.ActivationPage, [styles])}>
			<div className={classes.text}>
				<Htag tag={'very-large'}>Регистрация завершена</Htag>
				<Htag
					tag={'medium'}
					styles={classes.small_text}
				>
					Вы успешно активировали аккаунт
				</Htag>
			</div>
			<div className={classes.buttons}>
				<Link to={ERoutePath.AUTHORIZATION}>
					<Button
						variation="clear"
						styles={classes.button}
						format={'small'}
					>
						Войти
						<Icon
							icon={'lock'}
							variation={'primary'}
						></Icon>
					</Button>
				</Link>
			</div>
		</div>
	)
}
export default ActivationPage

interface IActivationPageProps {
	styles?: string
}
