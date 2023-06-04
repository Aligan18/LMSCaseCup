import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './Navbar.module.scss'

import { useTheme } from 'app/providers/ThemeProvider'

import DarkIcon from 'shared/assets/svg/DarkMode.svg'
import { classnames as cn } from 'shared/lib'

export const Navbar = ({ style }: INavbarProps) => {
	const { t } = useTranslation()
	const { changeTheme } = useTheme()

	return (
		<div className={cn(classes.Navbar, [style])}>
			<DarkIcon
				width={50}
				height={50}
			/>
			<button onClick={changeTheme}>{t('theme')}</button>
			<Link to={'/'}>{t('home-page')} </Link>
			<Link to={'/about'}>{t('about-page')} </Link>
		</div>
	)
}

interface INavbarProps {
	style?: string
}
