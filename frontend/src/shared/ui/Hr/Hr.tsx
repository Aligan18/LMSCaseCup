import classes from './Hr.module.scss'

import { classnames as cn } from 'shared/lib'

export const Hr = ({ styles }: IHrProps) => {
	return <hr className={cn(classes.line, [styles])} />
}

interface IHrProps {
	styles?: string
}
