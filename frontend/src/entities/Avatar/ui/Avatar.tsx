import classes from './Avatar.module.scss'

import Not_Avatar from 'shared/assets/svg/Not_Avatar.svg'
import { classnames as cn } from 'shared/lib'

export const Avatar = ({ styles, image, size }: IAvatarProps) => {
	const classMods = {
		[classes.small]: size === 'small',
		[classes.medium]: size === 'medium',
		[classes.large]: size === 'large',
	}

	return (
		<>
			{!image && (
				<div className={cn(classes.Avatar, [styles])}>
					<Not_Avatar className={cn('', [], classMods)} />
				</div>
			)}
		</>
	)
}

interface IAvatarProps {
	styles?: string
	image?: string | null
	size: 'small' | 'medium' | 'large'
}
