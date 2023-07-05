import classes from './SelectOption.module.scss'
import { IOptions } from './types/Options'

import { classnames as cn } from 'shared/lib'

export const SelectOption = ({ styles, options = [] }: ISelectOptionProps) => {
	return (
		<select className={cn(classes.selectElement, [styles])}>
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
}

interface ISelectOptionProps {
	styles?: string
	options: IOptions[]
}
