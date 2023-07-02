import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

import classes from './CircleForIcon.module.scss'

import { classnames as cn } from 'shared/lib'

export const CircleForIcon = ({ styles, children, variation = 'primary' }: ICircleForIconProps) => {
	return (
		<div
			className={cn(classes.CircleForIcon, [styles, classes.right_block], {
				[classes.red]: variation === 'red',
				[classes.primary]: variation === 'primary',
				[classes.inverted]: variation === 'inverted-secondary',
			})}
		>
			{children}
		</div>
	)
}

interface ICircleForIconProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	children: ReactNode
	variation: 'red' | 'inverted-secondary' | 'primary'
}
