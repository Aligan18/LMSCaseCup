import { DetailedHTMLProps, HTMLAttributes } from 'react'

import classes from './DeleteZone.module.scss'

import { classnames as cn } from 'shared/lib'

export const DeleteZone = ({ styles, isVisible, ...props }: IDeleteZoneProps) => {
	return (
		<div
			className={cn(classes.DeleteZone, [styles], {
				[classes.invisible]: isVisible === false,
			})}
			{...props}
		></div>
	)
}

interface IDeleteZoneProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	isVisible?: boolean
}
