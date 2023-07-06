import classes from './ErrorText.module.scss'

import { classnames as cn } from 'shared/lib'

export const ErrorText = ({ styles, children }: IErrorTextProps) => {
	return <span className={cn(classes.ErrorText, [styles])}>{children}</span>
}

interface IErrorTextProps {
	styles?: string
	children: string
}
