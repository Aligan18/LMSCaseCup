import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

import classes from './TextInput.module.scss'

import { classnames as cn } from 'shared/lib'

export const TextInput = ({ styles, children, ...props }: ITextInputProps) => {
	return (
		<div className={cn(classes.TextInput, [styles])}>
			<textarea
				className={classes.textarea}
				placeholder={children}
				{...props}
			></textarea>
		</div>
	)
}

interface ITextInputProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	children: string
	styles?: string
}
