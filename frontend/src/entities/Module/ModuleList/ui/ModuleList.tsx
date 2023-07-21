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
import { classnames as cn, useDragAndDropOrdering } from 'shared/lib'
import { DeleteZone, DragAndDropDiv, List } from 'shared/ui'
import { AccordionWrapper } from 'shared/ui'

export const ModuleList = ({
	styles,
	module,
	editor = false,
	currentId,
	setCurrentId,
}: IModuleListProps) => {
	const [isVisible, setIsVisible] = useState(false)

	const modelDrag = useDragAndDropOrdering({ currentId, setCurrentId })
	const lessonDrag = useDragAndDropOrdering({ currentId, setCurrentId })

	const [currentContent, setCurrentContent] = useState<IModuleData | undefined>(undefined)

	function dragOverForDeleteHandler(e: BaseSyntheticEvent): void {
		e.preventDefault()
	}

	function dropDeleteHandler(e: BaseSyntheticEvent) {
		e.preventDefault()
		setIsVisible(false)
		if (currentContent) {
			console.log('Deleted')
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
								childrenId={classes.module_Id}
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
										childrenId={classes.lesson_Id}
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
	setCurrentId?: Dispatch<SetStateAction<string | undefined>>
}
