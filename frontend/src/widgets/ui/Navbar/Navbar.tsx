import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './Navbar.module.scss'

import { ChangeThemeButton } from 'features/ChangeTheme'
import { NotificationIcon } from 'features/NotificationIcon'
import { TranslateButton } from 'features/Translate'

import { Avatar } from 'entities/Avatar'

import { classnames as cn } from 'shared/lib'
import { Button, Icon, Input, ListItem } from 'shared/ui'
import { Logo } from 'shared/ui/Logo/Logo'

export const Navbar = ({ style }: INavbarProps) => {
	const { t, i18n } = useTranslation()
	const userType: 'student' | 'teacher' | 'admin' = 'student'

	return (
		<div className={cn(classes.Navbar, [style])}>
			<div className={classes.left}>
				<Link to={'/'}>
					<Logo />
				</Link>
				<Input variation={'clear'}>Найти</Input>
			</div>
			<div className={classes.right}>
				{userType == 'student' && (
					<Button
						variation={'clear'}
						format={'small'}
					>
						{t('kurator')}
						<Icon
							variation={'primary'}
							icon={'edit'}
						/>
					</Button>
				)}
				{userType && (
					<Button
						variation={'clear'}
						format={'small'}
					>
						{t('uchitelskaya')}
						<Icon
							variation={'primary'}
							icon={'book'}
						/>
					</Button>
				)}

				{userType && (
					<Button
						variation={'clear'}
						format={'small'}
					>
						{t('admin')}
						<Icon
							variation={'primary'}
							icon={'tool'}
						/>
					</Button>
				)}
				<ChangeThemeButton />
				<TranslateButton />
				<NotificationIcon />

				<Avatar />
			</div>
		</div>
	)
}

interface INavbarProps {
	style?: string
}
