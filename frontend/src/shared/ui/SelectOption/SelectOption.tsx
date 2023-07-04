import { Htag } from '../Htag/Htag'
import classes from './SelectOption.module.scss'

import { classnames as cn } from 'shared/lib'

export const SelectOption = ({
	styles,
	title,
	name_title,
	id_title,
	value_title,
}: ISelectOptionProps) => {
	return (
		<div className={cn(classes.SelectOption, [styles])}>
			<label>
				<Htag tag={'small'}>{title}</Htag>
			</label>

			<select
				name={name_title}
				id={id_title}
				className={classes.selectElement}
			>
				<option value="">{value_title}</option>
			</select>
		</div>
	)
}

interface ISelectOptionProps {
	styles?: string
	title: string
	name_title: string
	id_title: string
	value_title: string
}
