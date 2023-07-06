import { ForwardedRef, forwardRef } from 'react'

import classes from './SelectOption.module.scss'
import { IOptions } from './types/Options'

import { classnames as cn } from 'shared/lib'

export const SelectOption = forwardRef(
	(
		{ styles, options = [], ...props }: ISelectOptionProps,
		ref: ForwardedRef<HTMLSelectElement>,
	) => {
		return (
			<select
				ref={ref}
				className={cn(classes.selectElement, [styles])}
				{...props}
			>
				{options.map((option) => (
					<option
						className={classes.option}
						key={option.value}
						value={option.value}
					>
						{option.title}
					</option>
				))}
			</select>
		)
	},
)

interface ISelectOptionProps {
	styles?: string
	options: IOptions[]
}
