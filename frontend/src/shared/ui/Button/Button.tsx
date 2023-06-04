import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import classes from './Button.module.scss'

import { classnames as cn } from 'shared/lib'

export const Button: FC<IButtonProps> = ({ styles, children, ...props }) => {
	return (
		<button
			className={cn(classes.Button, [styles])}
			{...props}
		>
			{children}
		</button>
	)
}

interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	styles?: string
	children: string
}
