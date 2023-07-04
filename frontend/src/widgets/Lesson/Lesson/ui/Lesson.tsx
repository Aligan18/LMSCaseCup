import classes from './Lesson.module.scss'

import { classnames as cn } from 'shared/lib'
import { TextBox } from 'shared/ui'

export const Lesson = ({ styles }: ILessonProps) => {
	const data = {
		title: 'Название урока',
		video: 'https://youtu.be/i-uvtDKeFgE',
		lesson: [
			{
				title: 'Python Install',
				type: 'text',
				contet: 'Many PCs and Macs will have python already installed.To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):',
			},
			{
				title: 'Python Install',
				type: 'code',
				contet: 'C:UsersYour Name>python --version',
			},
		],
	}
	return (
		<div className={cn(classes.Lesson, [styles])}>
			<div>
				<iframe
					width="420"
					height="315"
					src={data.video}
				></iframe>
			</div>
			<div></div>
		</div>
	)
}

interface ILessonProps {
	styles?: string
}
