import { ForwardedRef, forwardRef } from 'react'

import classes from './CheckBox.module.scss'

import { classnames as cn } from 'shared/lib'

export const CheckBox = forwardRef(
	({ styles, title, ...props }: ICheckBoxProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<label className={cn(classes.CheckBox, [styles])}>
				<input
					ref={ref}
					type="checkbox"
					{...props}
				/>
				<span className={classes.title}>{title}</span>
			</label>
		)
	},
)

interface ICheckBoxProps {
	styles?: string
	title: string
}
