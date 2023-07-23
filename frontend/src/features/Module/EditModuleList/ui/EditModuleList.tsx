import {
	BaseSyntheticEvent,
	DetailedHTMLProps,
	Dispatch,
	HtmlHTMLAttributes,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getEditModuleTrashCurrent } from '../models/selectors/getEditModuleTrashCurrent'
import { editModuleSliceActions } from '../models/slice/EditModuleSlice'
import classes from './EditModuleList.module.scss'

import {
	ERoutePath,
	ICREATE_LESSON_Params,
	ICREATE_MODULE_Params,
	IEDIT_LESSON_Params,
	ILAST_ID_Params,
} from 'app/providers/AppRouters'

import { LessonListItem } from 'entities/Lesson/LessonListItem'
import { ModuleListItem } from 'entities/Module/ModuleListItem'
import { IListModule, IModuleData, instanceOfIModuleData, instanceOfListModule } from 'entities/Module/types'

import {
	classnames as cn,
	setParamsInPath,
	swapOrderForDragAndDrop,
	useAppDispatch,
	useDragAndDropOrdering,
} from 'shared/lib'
import { AnimatedButton, Button, DeleteZone, DragAndDropDiv, Htag, Icon, List } from 'shared/ui'
import { AccordionWrapper } from 'shared/ui'

export const EditModuleList = ({
	styles,
	module,
	currentId,
	setCurrentId,
	setCurrentContent,
	currentContent,
	moduledata,
	moduleIndex,
}: IEditModuleListProps) => {
	const dispatch = useAppDispatch()
	const lesson_id = classes.lesson_Id
	const module_id = classes.module_Id

	const [isVisible, setIsVisible] = useState(false)
	const trashCurrent = useSelector(getEditModuleTrashCurrent)

	function lessonDropHandler(e: BaseSyntheticEvent, content: IListModule): void {
		if (instanceOfListModule(currentContent)) {
			const { status, changedContent, changedItems } = swapOrderForDragAndDrop<IListModule>(
				module.list_modules,
				content,
				currentContent,
			)

			status &&
				dispatch(
					editModuleSliceActions.change_listModule({
						changedContent: changedContent,
						listModule: changedItems,
						module_index: moduleIndex,
					}),
				)
		}
	}

	function lessonStartHandler(e: BaseSyntheticEvent, content: IListModule): void {
		console.log(content)

		setCurrentContent && setCurrentContent(content)
	}

	function moduleDropHandler(e: BaseSyntheticEvent, content: IModuleData): void {
		console.log('step2')
		if (trashCurrent) {
			dispatch(editModuleSliceActions.remove_trash_current({ module_index: moduleIndex }))
		} else if (moduledata) {
			if (instanceOfIModuleData(currentContent)) {
				const { status, changedContent, changedItems } = swapOrderForDragAndDrop<IModuleData>(
					moduledata,
					content,
					currentContent,
				)
				status &&
					dispatch(
						editModuleSliceActions.change_module({ changedContent: changedContent, module: changedItems }),
					)
			}
		}
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
				dispatch(
					editModuleSliceActions.delete_lesson({
						list_modules_id: currentContent.id,
						moduleIndex: moduleIndex,
					}),
				)
			} else if (currentId === module_id) {
				console.log('Deleted module')
				dispatch(editModuleSliceActions.delete_module({ moduleIndex: moduleIndex }))
			}
		}
	}

	return (
		<div
			className={cn(classes.EditModuleList, [styles])}
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
								<div
									key={data.id}
									className={classes.list_wrapper}
								>
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
												id: String(data.lecture_id?.id),
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
												lesson_id: String(data.lecture_id?.id),
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
							<Link
								to={setParamsInPath<ICREATE_LESSON_Params>(ERoutePath.CREATE_LESSON, {
									module_id: String(module.id),
								})}
							>
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
	)
}

interface IEditModuleListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	module: IModuleData
	currentId?: string
	moduledata?: IModuleData[]
	setCurrentId?: Dispatch<SetStateAction<string | undefined>>
	setCurrentContent?: Dispatch<SetStateAction<IModuleData | IListModule | undefined>>
	currentContent?: IModuleData | IListModule | undefined
	moduleIndex: number
	DataOrdering?: <T extends { id?: number | undefined; order?: number | undefined }>(
		contentData: T[],
		content: T,
	) => void
}
