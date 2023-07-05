import classes from './CheckBox.module.scss'

import { classnames as cn } from 'shared/lib'

export const CheckBox = ({ styles, title }: ICheckBoxProps) => {
	return (
		<label className={cn(classes.CheckBox, [styles])}>
			<input type="checkbox" />
			<span className={classes.title}>{title}</span>
		</label>
	)
}

interface ICheckBoxProps {
	styles?: string
	title: string
}
