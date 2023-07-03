import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

import classes from './Htag.module.scss'

import { classnames as cn } from 'shared/lib'

export const Htag = ({ styles, tag = 'medium', children, ...props }: IHtagProps) => {
	switch (tag) {
		case 'very-large':
			return (
				<h1
					className={cn(classes.very_large, [styles, classes.cursor])}
					{...props}
				>
					{children}
				</h1>
			)

		case 'large':
			return (
				<h1
					className={cn(classes.large, [styles, classes.cursor])}
					{...props}
				>
					{children}
				</h1>
			)

		case 'medium':
			return (
				<h2
					className={cn(classes.medium, [styles, classes.cursor])}
					{...props}
				>
					{children}
				</h2>
			)

		case 'small':
			return (
				<h3
					className={cn(classes.small, [styles, classes.cursor])}
					{...props}
				>
					{children}
				</h3>
			)

		case 'very-small':
			return (
				<h3
					className={cn(classes.very_small, [styles, classes.cursor])}
					{...props}
				>
					{children}
				</h3>
			)

		default:
			return <></>
	}
}

interface IHtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	tag: 'large' | 'medium' | 'small' | 'very-small' | 'very-large'
}
