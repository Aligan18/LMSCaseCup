import classes from './StudentAnswer.module.scss'

import { DownloadingFileButton } from 'features/DownloadingFileButton'

import { classnames as cn } from 'shared/lib'
import { TextBox } from 'shared/ui'

export const StudentAnswer = ({ styles }: IStudentAnswerProps) => {
	return (
		<div className={cn(classes.StudentAnswer, [styles])}>
			<TextBox size="medium">Мой ответ </TextBox>
			<DownloadingFileButton
				title="Скачать"
				file={'asfsf'}
			/>
		</div>
	)
}

interface IStudentAnswerProps {
	styles?: string
}
