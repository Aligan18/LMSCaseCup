import { ReactNode } from 'react'

import { Hr } from '..'
import { Button } from '../Button/Button'
import { Htag } from '../Htag/Htag'
import { Icon } from '../Icon/Icon'
import classes from './Header.module.scss'

import { classnames as cn } from 'shared/lib'

export const Header = ({ styles, title, buttons }: IHeaderProps) => {
	return (
		<>
			<div className={cn(classes.Header, [styles])}>
				<div className={classes.wrapper}>
					<Htag tag={'large'}>{title}</Htag>
					<div className={classes.button}>{buttons}</div>
				</div>
				<Hr></Hr>
			</div>
		</>
	)
}

interface IHeaderProps {
	styles?: string
	title: string
	buttons: ReactNode
}
