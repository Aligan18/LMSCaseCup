import {
	BaseSyntheticEvent,
	DetailedHTMLProps,
	Dispatch,
	HtmlHTMLAttributes,
	SetStateAction,
	useState,
} from 'react'

import classes from './ModuleList.module.scss'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { IAboutLessonData } from 'entities/Lesson/types'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IModuleData } from 'entities/Module/types'

import variables from 'shared/const/ScssVariables/variables.module.scss'
import { classnames as cn, swapOrderForDragAndDrop, useDragAndDropOrdering } from 'shared/lib'
import { DeleteZone, DragAndDropDiv, List } from 'shared/ui'
import { AccordionWrapper } from 'shared/ui'

export const ModuleList = ({
	styles,
	module,
	editor = false,
	currentId,
	setCurrentId,
	setCurrentContent,
	currentContent,
	moduledata,
}: IModuleListProps) => {
	const lesson_id = classes.lesson_Id
	const module_id = classes.module_Id
	const [isVisible, setIsVisible] = useState(false)
	function lessonDropHandler(e: BaseSyntheticEvent, content: IAboutLessonData): void {
		swapOrderForDragAndDrop(module.lesson, content, currentContent)
	}

	function lessonStartHandler(e: BaseSyntheticEvent, content: IAboutLessonData): void {
		console.log(content)

		setCurrentContent && setCurrentContent(content)
	}

	function moduleDropHandler(e: BaseSyntheticEvent, content: IModuleData): void {
		console.log('step2')
		moduledata && swapOrderForDragAndDrop(moduledata, content, currentContent)
	}
	const lessonDrag = useDragAndDropOrdering<IAboutLessonData>({
		currentId,
		setCurrentId,
		drop: lessonDropHandler,
		start: lessonStartHandler,
		setIsVisible,
	})

	function moduleStartHandler(e: BaseSyntheticEvent, content: IModuleData): void {
		console.log(content)

		setCurrentContent && setCurrentContent(content)
	}
	const modelDrag = useDragAndDropOrdering({
		currentId,
		setCurrentId,
		drop: moduleDropHandler,
		start: moduleStartHandler,
		setIsVisible,
	})

	function dragOverForDeleteHandler(e: BaseSyntheticEvent): void {
		e.preventDefault()
	}

	function dropDeleteHandler(e: BaseSyntheticEvent) {
		e.preventDefault()
		setIsVisible(false)
		if (currentContent) {
			if (currentId === lesson_id) {
				console.log('Deleted lesson')
			} else if (currentId === module_id) {
				console.log('Deleted module')
			}

			// dispatch(lessonContentActions.delete_content(currentContent))
		}
	}

	return (
		<>
			{editor ? (
				<div
					className={cn(classes.ModuleList, [styles])}
					key={module.id}
				>
					<DeleteZone
						onDragOver={(e) => dragOverForDeleteHandler(e)}
						onDrop={(e) => dropDeleteHandler(e)}
						isVisible={isVisible}
					/>
					<AccordionWrapper
						main={
							<DragAndDropDiv
								dropHandler={modelDrag.dropHandler}
								endHandler={modelDrag.endHandler}
								leaveHandler={modelDrag.leaveHandler}
								overHandler={modelDrag.overHandler}
								startHandler={modelDrag.startHandler}
								childrenId={module_id}
								item={module}
							>
								<ModuleListItem data={module} />
							</DragAndDropDiv>
						}
						renderItems={
							<List
								styles={classes.lesson_list}
								items={module.lesson}
								variation={'list'}
								renderItem={(data: IAboutLessonData) => (
									<DragAndDropDiv
										dropHandler={lessonDrag.dropHandler}
										endHandler={lessonDrag.endHandler}
										leaveHandler={lessonDrag.leaveHandler}
										overHandler={lessonDrag.overHandler}
										startHandler={lessonDrag.startHandler}
										childrenId={lesson_id}
										item={data}
									>
										<LessonListItem
											data={data}
											key={data.id}
										/>
									</DragAndDropDiv>
								)}
							/>
						}
					/>
				</div>
			) : (
				<div
					className={cn(classes.ModuleList, [styles])}
					key={module.id}
				>
					<AccordionWrapper
						main={<ModuleListItem data={module} />}
						renderItems={
							<List
								styles={classes.lesson_list}
								items={module.lesson}
								variation={'list'}
								renderItem={(data: IAboutLessonData) => (
									<LessonListItem
										data={data}
										key={data.id}
									/>
								)}
							/>
						}
					/>
				</div>
			)}
		</>
	)
}

interface IModuleListProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	module: IModuleData
	editor?: boolean
	currentId?: string
	moduledata?: IModuleData[]
	setCurrentId?: Dispatch<SetStateAction<string | undefined>>
	setCurrentContent?: Dispatch<SetStateAction<IModuleData | IAboutLessonData | undefined>>
	currentContent?: IModuleData | IAboutLessonData | undefined
	DataOrdering?: <T extends { id?: number | undefined; order?: number | undefined }>(
		contentData: T[],
		content: T,
	) => void
}
