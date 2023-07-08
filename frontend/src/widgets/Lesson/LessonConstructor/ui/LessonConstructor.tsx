import { useSelector } from 'react-redux'

import classes from './LessonConstructor.module.scss'

import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

import { ILessonContentSchema } from 'features/Lesson/CreateLessonContentForm'
import { LessonContentList } from 'features/Lesson/LessonContentList'

import { classnames as cn } from 'shared/lib'
import { Header, YouTubeVideo } from 'shared/ui'

export const LessonConstructor = ({ styles }: ILessonConstructorProps) => {
	const data = {
		id: 1,
		title: 'Введение в программирование',
		video: 'https://www.youtube.com/embed/i-uvtDKeFgE',
		additions: [
			{ title: 'Презентация', file: 'https://www.youtube.com/' },
			{ title: 'Регламент', file: 'https://www.youtube.com/' },
			{ title: 'Книга', file: 'https://www.youtube.com/' },
		],
	}

	const lesson = useSelector((state: IStateSchema) => state.createLessonContent)

	// const lesson: ILessonContentSchema[] = [
	// 	{
	// 		id: 1,
	// 		order: 3,
	// 		title: 'Python Install',
	// 		type: 'text',
	// 		content: `Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC,
	// 				search in the start bar for Python or run the following on the Command Line (cmd.exe):
	// 				To play your video on a web page, do the following:

	// 					Upload the video to YouTube
	// 					Take a note of the video id
	// 					Define an <iframe> element in your web page
	// 					Let the src attribute point to the video URL
	// 					Use the width and height attributes to specify the dimension of the player
	// 					Add any other parameters to the URL (see below)`,
	// 	},
	// 	{
	// 		id: 2,
	// 		order: 1,
	// 		title: null,
	// 		type: 'text',
	// 		content:
	// 			'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
	// 	},
	// 	{
	// 		id: 3,
	// 		order: 2,
	// 		title: null,
	// 		type: 'text',
	// 		content:
	// 			'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
	// 	},
	// 	{
	// 		id: 4,
	// 		order: 4,
	// 		title: 'Python',
	// 		type: 'text',
	// 		content:
	// 			'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
	// 	},
	// 	{
	// 		id: 5,
	// 		order: 5,
	// 		title: null,
	// 		type: 'code',
	// 		content: 'C:UsersYour Name>python --version',
	// 	},
	// ]

	return (
		<div className={cn(classes.Lesson, [styles])}>
			<Header title={data.title} />
			<YouTubeVideo video_link={data.video} />
			<LessonContentList
				editor={true}
				data={lesson}
			/>
		</div>
	)
}

interface ILessonConstructorProps {
	styles?: string
}
