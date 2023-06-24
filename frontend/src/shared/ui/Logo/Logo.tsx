import classes from './Logo.module.scss'

import LogoIcon from 'shared/assets/svg/Logo.svg'
import { classnames as cn } from 'shared/lib'

export const Logo = ({ styles }: ILogoProps) => {
	return (
		<div className={cn(classes.Logo, [styles])}>
			<LogoIcon />
		</div>
	)
}

interface ILogoProps {
	styles?: string
}
