import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

import classes from './CircleForIcon.module.scss'

import { classnames as cn } from 'shared/lib'

export const CircleForIcon = ({ styles, children }: ICircleForIconProps) => {
	return (
		<div className={cn(classes.CircleForIcon, [styles, classes.right_block])}>{children}</div>
	)
}

interface ICircleForIconProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	children: ReactNode
}
