import { useSelector } from 'react-redux'

import { getTaskAnswerData } from '../../models/selectors/getTaskAnswerData'
import classes from './StudentAnswer.module.scss'

import { DownloadingFileButton } from 'features/DownloadingFileButton'

import { classnames as cn } from 'shared/lib'
import { TextBox } from 'shared/ui'

export const StudentAnswer = ({ styles }: IStudentAnswerProps) => {
	const studentAnswer = useSelector(getTaskAnswerData)
	return (
		<>
			{studentAnswer && (
				<div className={cn(classes.StudentAnswer, [styles])}>
					<TextBox size="medium">{studentAnswer?.description} </TextBox>
					{studentAnswer?.file && (
						<DownloadingFileButton
							title="Скачать"
							file={studentAnswer?.file}
						/>
					)}
				</div>
			)}
		</>
	)
}

interface IStudentAnswerProps {
	styles?: string
}
