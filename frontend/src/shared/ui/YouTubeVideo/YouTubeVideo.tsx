import classes from './YouTubeVideo.module.scss'

import { classnames as cn } from 'shared/lib'
import { getRightLinkForYouTube } from 'shared/lib/'

export const YouTubeVideo = ({ styles, video_link }: IYouTubeVideoProps) => {
	const right_link = getRightLinkForYouTube(video_link)
	return (
		<div className={cn(classes.YouTubeVideo, [styles])}>
			<iframe
				className={classes.iframe}
				width="100%"
				height="100%"
				src={right_link}
			></iframe>
		</div>
	)
}

interface IYouTubeVideoProps {
	styles?: string
	video_link: string
}
