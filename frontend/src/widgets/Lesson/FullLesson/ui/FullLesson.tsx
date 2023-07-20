import classes from './FullLesson.module.scss'

import { LessonContentList } from 'features/Lesson/LessonContentList'

import { ILectureData } from 'entities/Lesson/types'

import { classnames as cn } from 'shared/lib'
import { Header, YouTubeVideo } from 'shared/ui'

export const FullLesson = ({ styles }: IFullLessonProps) => {
	const data: ILectureData = {
		id: 1,
		course: 1,
		number: 5,
		description: 'Введение в программирование',
		title: 'Введение в программирование',
		video: 'https://www.youtube.com/embed/i-uvtDKeFgE',
		additions: [
			{ id: 1, title: 'Презентация', file: 'https://www.youtube.com/' },
			{ id: 2, title: 'Регламент', file: 'https://www.youtube.com/' },
			{ id: 3, title: 'Книга', file: 'https://www.youtube.com/' },
		],

		lesson: [
			{
				id: 1,
				order: 1,
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
				id: 2,
				order: 2,
				title: '',
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 3,
				order: 3,
				title: '',
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 4,
				order: 4,
				title: 'Python',
				type: 'text',
				content:
					'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				id: 5,
				order: 5,
				title: '',
				type: 'code',
				content: 'C:UsersYour Name>python --version',
			},
		],
	}

	return (
		<div className={cn(classes.Lesson, [styles])}>
			<Header
				line={false}
				title={data.title}
			/>
			<YouTubeVideo video_link={data.video} />
			<LessonContentList data={data.lesson} />
		</div>
	)
}

interface IFullLessonProps {
	styles?: string
}
