import { BaseSyntheticEvent, DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

import classes from './ModuleList.module.scss'

import { ERoutePath, ICREATE_LESSON_Params, IEDIT_LESSON_Params, ILAST_ID_Params } from 'app/providers/AppRouters'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IListModule, IModuleData } from 'entities/Module/types'

import { classnames as cn, setParamsInPath, swapOrderForDragAndDrop, useDragAndDropOrdering } from 'shared/lib'
import { AnimatedButton, Button, DeleteZone, DragAndDropDiv, Htag, Icon, List } from 'shared/ui'
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
	function lessonDropHandler(e: BaseSyntheticEvent, content: IListModule): void {
		swapOrderForDragAndDrop(module.list_modules, content, currentContent)
	}

	function lessonStartHandler(e: BaseSyntheticEvent, content: IListModule): void {
		console.log(content)

		setCurrentContent && setCurrentContent(content)
	}

	function moduleDropHandler(e: BaseSyntheticEvent, content: IModuleData): void {
		console.log('step2')
		moduledata && swapOrderForDragAndDrop(moduledata, content, currentContent)
	}
	const lessonDrag = useDragAndDropOrdering<IListModule>({
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

	const createLessonParams: ICREATE_LESSON_Params = {
		module_id: String(module.id),
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
							<>
								<List
									styles={classes.lesson_list}
									items={module.list_modules}
									variation={'list'}
									renderItem={(data: IListModule) => (
										<div className={classes.list_wrapper}>
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
													hasButton={false}
													data={data}
													key={data.id}
												/>
											</DragAndDropDiv>
											<div className={classes.buttons}>
												<Link
													to={setParamsInPath<ILAST_ID_Params>(ERoutePath.LESSON, {
														id: String(data.id),
													})}
												>
													<AnimatedButton
														variation="clear"
														icon={'right'}
													>
														Пререйти
													</AnimatedButton>
												</Link>
												<Link
													to={setParamsInPath<IEDIT_LESSON_Params>(ERoutePath.EDIT_LESSON, {
														lesson_id: String(data.id),
														module_id: String(module.id),
													})}
												>
													<AnimatedButton
														variation="clear"
														icon={'edit'}
													>
														Редактировать
													</AnimatedButton>
												</Link>
											</div>
										</div>
									)}
								/>
								<div className={classes.add_buttons}>
									<Htag tag={'medium'}>Добавить :</Htag>
									<Link to={setParamsInPath(ERoutePath.CREATE_LESSON, createLessonParams)}>
										<Button format={'small'}>
											Лекцию
											<Icon
												variation={'secondary'}
												icon={'plus'}
											/>
										</Button>
									</Link>
									<Button format={'small'}>
										Задание
										<Icon
											variation={'secondary'}
											icon={'plus'}
										/>
									</Button>
									<Button format={'small'}>
										Тест
										<Icon
											variation={'secondary'}
											icon={'plus'}
										/>
									</Button>
								</div>
							</>
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
								items={module.list_modules}
								variation={'list'}
								renderItem={(data: IListModule) => (
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

interface IModuleListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	module: IModuleData
	editor?: boolean
	currentId?: string
	moduledata?: IModuleData[]
	setCurrentId?: Dispatch<SetStateAction<string | undefined>>
	setCurrentContent?: Dispatch<SetStateAction<IModuleData | IListModule | undefined>>
	currentContent?: IModuleData | IListModule | undefined
	DataOrdering?: <T extends { id?: number | undefined; order?: number | undefined }>(
		contentData: T[],
		content: T,
	) => void
}
