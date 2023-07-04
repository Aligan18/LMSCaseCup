import classes from './LessonContentList.module.scss'

import { ILessonContentData } from 'entities/Lesson'

import { classnames as cn } from 'shared/lib'
import { CodeBox, Hr, Htag, List, TextBox } from 'shared/ui'

export const LessonContentList = ({ styles, data }: ILessonContentListProps) => {
	return (
		<div className={cn(classes.LessonContentList, [styles])}>
			<List
				variation={'list'}
				items={data}
				renderItem={(content: ILessonContentData) => (
					<>
						{content.title && (
							<>
								<Hr />
								<Htag tag={'large'}> {content.title}</Htag>
							</>
						)}
						{content.type === 'text' && (
							<TextBox size={'small'}>{content.content}</TextBox>
						)}
						{content.type === 'code' && <CodeBox>{content.content}</CodeBox>}
					</>
				)}
			/>
		</div>
	)
}

interface ILessonContentListProps {
	styles?: string
	data: ILessonContentData[]
}
