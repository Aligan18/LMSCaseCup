import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './ActivationPage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon } from 'shared/ui'

export const ActivationPage = ({ styles }: IActivationPageProps) => {
	const { t } = useTranslation('admin')

	return (
		<div className={cn(classes.ActivationPage, [styles])}>
			<div className={classes.text}>
				<Htag tag={'very-large'}>{t('registraciya-zavershena')}</Htag>
				<Htag
					tag={'large'}
					styles={classes.small_text}
				>
					{t('vy-uspeshno-aktivirovali-akkaunt')}
				</Htag>
			</div>
			<div className={classes.buttons}>
				<Link to={ERoutePath.AUTHORIZATION}>
					<Button
						variation="clear"
						styles={classes.button}
						format={'small'}
					>
						{t('voiti')}
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
