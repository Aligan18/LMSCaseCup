import classes from './ChangeThemeButton.module.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { ETheme } from 'app/providers/ThemeProvider/'

import { classnames as cn } from 'shared/lib'
import { Icon } from 'shared/ui'

export const ChangeThemeButton = ({ styles }: IChangeThemeButtonProps) => {
	const { changeTheme, theme } = useTheme()
	return (
		<>
			{theme == ETheme.LIGHT && (
				<Icon
					icon={'sun'}
					onClick={changeTheme}
					className={cn(classes.ChangeThemeButton, [styles])}
				/>
			)}
			{theme == ETheme.DARK && (
				<Icon
					icon={'moon'}
					variation="inverted-secondary"
					onClick={changeTheme}
					className={cn(classes.ChangeThemeButton, [styles])}
				/>
			)}
		</>
	)
}

interface IChangeThemeButtonProps {
	styles?: string
}
