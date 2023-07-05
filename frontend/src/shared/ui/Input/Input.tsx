import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import classes from './Input.module.scss'

import { classnames as cn } from 'shared/lib'

export const Input = ({
	styles,
	variation = 'secondary',
	format = 'medium',
	children,
}: IInputProps) => {
	return (
		<input
			className={cn(classes.Input, [styles], {
				[classes.secondary]: variation === 'secondary',
				[classes.clear]: variation === 'clear',
				[classes.medium]: format === 'medium',
				[classes.small]: format === 'small',
				[classes.large]: format === 'large',
			})}
			placeholder={children}
		></input>
	)
}

interface IInputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	styles?: string
	variation?: 'secondary' | 'clear'
	format?: 'small' | 'medium' | 'large'
	children?: string
}
