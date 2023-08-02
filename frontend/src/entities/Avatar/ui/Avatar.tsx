import { useSelector } from 'react-redux'

import classes from './Avatar.module.scss'

import { getUserInfo } from 'entities/Users/CustomUser'

import Not_Avatar from 'shared/assets/svg/Not_Avatar.svg'
import { classnames as cn } from 'shared/lib'

export const Avatar = ({ styles, image, size }: IAvatarProps) => {
	const info = useSelector(getUserInfo)
	const classMods = {
		[classes.small]: size === 'small',
		[classes.medium]: size === 'medium',
		[classes.large]: size === 'large',
	}

	return (
		<>
			{!info.avatar ? (
				<div className={cn(classes.Avatar, [styles])}>
					<Not_Avatar className={cn('', [], classMods)} />
				</div>
			) : (
				<div className={cn(classes.Avatar, [styles])}>
					<img
						src={info.avatar}
						className={cn(classes.image, [], classMods)}
					/>
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
