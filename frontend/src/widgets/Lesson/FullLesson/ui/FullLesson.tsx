import classes from './FullLesson.module.scss'

import { LessonContentList } from 'widgets/Lesson/LessonContentList/ui/LessonContentList'

import { ILessonContentData } from 'entities/Lesson/types/Lesson.types'

import { classnames as cn } from 'shared/lib'
import { CodeBox, Hr, Htag, List, TextBox } from 'shared/ui'

export const FullLesson = ({ styles }: IFullLessonProps) => {
	const data = {
		title: 'Введение в программирование',
		video: 'https://www.youtube.com/embed/i-uvtDKeFgE',
		lesson: [
			{
				title: 'Python Install',
				type: 'text',
				content: `Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, 
					search in the start bar for Python or run the following on the Command Line (cmd.exe):
					To play your video on a web page, do the following:

						Upload the video to YouTube
						Take a note of the video id
						Define an <iframe> element in your web page
						Let the src attribute point to the video URL
						Use the width and height attributes to specify the dimension of the player
						Add any other parameters to the URL (see below)`,
			},
			{
				title: null,
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				title: null,
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				title: 'Python',
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				title: null,
				type: 'code',
				content: 'C:UsersYour Name>python --version',
			},
		],
	}
	return (
		<div className={cn(classes.Lesson, [styles])}>
			<div className={classes.title}>
				<Htag tag={'very-large'}>{data.title}</Htag>
			</div>
			<div className={classes.video_wrapper}>
				<iframe
					className={classes.iframe}
					width="100%"
					height="100%"
					src={data.video}
				></iframe>
			</div>
			<LessonContentList data={data.lesson} />
		</div>
	)
}

interface IFullLessonProps {
	styles?: string
}
