import { Link } from 'react-router-dom'

import classes from './Navbar.module.scss'

import { useTheme } from 'app/providers/ThemeProvider'

import DarkIcon from 'shared/assets/svg/DarkMode.svg'
import { classnames as cn } from 'shared/lib'

export const Navbar = ({ style }: INavbarProps) => {
	const { changeTheme } = useTheme()

	return (
		<div className={cn(classes.Navbar, [style])}>
			<DarkIcon width={50} height={50} />
			<button onClick={changeTheme}>Theme</button>
			<Link to={'/'}>Home page </Link>
			<Link to={'/about'}>About page </Link>
		</div>
	)
}

interface INavbarProps {
	style?: string
}
