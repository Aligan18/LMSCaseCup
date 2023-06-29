import classes from './Avatar.module.scss'

import Not_Avatar_small from 'shared/assets/svg/Not_Avatar_small.svg'
import { classnames as cn } from 'shared/lib'

export const Avatar = ({ styles, image }: IAvatarProps) => {
	return (
		<>
			{!image && (
				<div className={cn(classes.Avatar, [styles])}>
					<Not_Avatar_small />
				</div>
			)}
		</>
	)
}

interface IAvatarProps {
	styles?: string
	image?: string
}
