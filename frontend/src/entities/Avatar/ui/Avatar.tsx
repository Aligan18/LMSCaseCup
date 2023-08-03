import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import classes from './Avatar.module.scss'

import { getUserInfo } from 'entities/Users/CustomUser'

import Not_Avatar from 'shared/assets/svg/Not_Avatar.svg'
import { classnames as cn } from 'shared/lib'

export const Avatar = ({ styles, image, size }: IAvatarProps) => {
	const info = useSelector(getUserInfo)
	const [src, setSrc] = useState<string | undefined | null>(image)
	const classMods = {
		[classes.small]: size === 'small',
		[classes.medium]: size === 'medium',
		[classes.large]: size === 'large',
	}
	useEffect(() => {
		if (image === undefined && info.avatar) {
			setSrc(info.avatar)
		}
	}, [])

	return (
		<>
			{!src ? (
				<div className={cn(classes.Avatar, [styles])}>
					<Not_Avatar className={cn('', [], classMods)} />
				</div>
			) : (
				<div className={cn(classes.Avatar, [styles])}>
					<img
						src={src}
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
