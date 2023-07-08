import { BaseSyntheticEvent, DragEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './LessonContentList.module.scss'

import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

import { ILessonContentSchema, lessonContentActions } from 'features/Lesson/CreateLessonContentForm'

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
	const dispatch = useDispatch()
	const contentData = useSelector((state: IStateSchema) => state.createLessonContent)

	const [chengedContent, setChengedContent] = useState([...contentData])

	const [currentContent, setCurrentContent] = useState<ILessonContentSchema | null>(null)

	function dragStartHandler(e: BaseSyntheticEvent, content: ILessonContentSchema): void {
		setCurrentContent(content)
	}

	function dragEndHandler(e: BaseSyntheticEvent): void {
		e.target.style.background = 'none'
	}
	function dragOverHandler(e: BaseSyntheticEvent): void {
		e.preventDefault()

		e.target.style.background = 'var(--primary-color)'
	}
	function dropHandler(e: BaseSyntheticEvent, content: ILessonContentSchema): void {
		e.preventDefault()
		e.target.style.background = 'none'
		const chengedContent = contentData.map((oldContent) => {
			if (oldContent.id === content.id) {
				return { ...oldContent, order: currentContent.order }
			}
			if (oldContent.id === currentContent.id) {
				return { ...oldContent, order: content.order }
			}
			return oldContent
		})
		console.log('chengedContent', chengedContent)

		dispatch(lessonContentActions.change_sort_content(chengedContent))
	}

	if (editor === false) {
		return (
			<div className={cn(classes.LessonContentList, [styles])}>
				<List
					styles={classes.list}
					variation={'list'}
					items={contentData}
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
