import { BaseSyntheticEvent, DragEvent, useState } from 'react'

import classes from './LessonContentList.module.scss'

import { ILessonContentSchema } from 'features/Lesson/CreateLessonContentForm'

import { ILessonContentData } from 'entities/Lesson/types'

import { classnames as cn } from 'shared/lib'
import { CodeBox, Hr, Htag, List, TextBox } from 'shared/ui'

export const LessonContentList = ({ styles, data, editor = false }: ILessonContentListProps) => {
	const renderContent = (content: ILessonContentData) => {
		return (
			<div className={classes.content_wrapper}>
				{content.title && (
					<>
						<Hr />
						<Htag tag={'large'}>{content.title}</Htag>
					</>
				)}
				{content.type === 'text' && <TextBox size={'medium'}>{content.content}</TextBox>}
				{content.type === 'code' && <CodeBox>{content.content}</CodeBox>}
			</div>
		)
	}

	const [currentCard, setCurrentCard] = useState<ILessonContentData | null>(null)

	function dragStartHandler(e: BaseSyntheticEvent, content: ILessonContentData): void {
		setCurrentCard(content)
	}

	function dragEndHandler(e: BaseSyntheticEvent): void {
		e.target.style.background = 'none'
	}
	function dragOverHandler(e: BaseSyntheticEvent): void {
		e.preventDefault()

		e.target.style.background = 'var(--primary-color)'
	}
	function dropHandler(e: BaseSyntheticEvent, content: ILessonContentData): void {
		e.preventDefault()
		e.target.style.background = 'none'
	}

	if (editor === false) {
		return (
			<div className={cn(classes.LessonContentList, [styles])}>
				<List
					styles={classes.list}
					variation={'list'}
					items={data}
					renderItem={(content: ILessonContentData) => (
						<div key={content.id}>{renderContent(content)}</div>
					)}
				/>
			</div>
		)
	} else {
		return (
			<div className={cn(classes.LessonContentList, [styles])}>
				<List
					variation={'list'}
					items={data}
					renderItem={(content: ILessonContentSchema) => (
						<div
							key={content.id}
							onDragStart={(e) => dragStartHandler(e, content)}
							onDragLeave={(e) => dragEndHandler(e)}
							onDragEnd={(e) => dragEndHandler(e)}
							onDragOver={(e) => dragOverHandler(e)}
							onDrop={(e) => dropHandler(e, content)}
							draggable={true}
							className={classes.drag_and_drop}
						>
							{renderContent(content)}
						</div>
					)}
				/>
			</div>
		)
	}
}

interface ILessonContentListProps {
	styles?: string
	data: ILessonContentData[] | ILessonContentSchema[]
	editor?: boolean
}
