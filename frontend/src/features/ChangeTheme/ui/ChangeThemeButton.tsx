import classes from './ChangeThemeButton.module.scss'

import { useTheme } from 'app/providers/ThemeProvider'

import { classnames as cn } from 'shared/lib'
import { Icon } from 'shared/ui'

export const ChangeThemeButton = ({ styles }: IChangeThemeButtonProps) => {
	const { changeTheme } = useTheme()
	return (
		<Icon
			icon={'tool'}
			onClick={changeTheme}
			className={cn(classes.ChangeThemeButton, [styles])}
		/>
	)
}

interface IChangeThemeButtonProps {
	styles?: string
}
