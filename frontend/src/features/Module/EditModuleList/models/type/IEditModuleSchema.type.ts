import { ILectureData } from 'entities/Lesson/types'
import { IListModule, IModuleData } from 'entities/Module/types'

export interface IEditModuleSchema {
	isLoading: boolean
	error?: string
	module_data: IModuleData[]
	changed_listModule: IChangedLesson
	changed_module: IChangedModule
	trash_listModule: IListModule[]
	trash_current?: IListModule
}

export interface IChangedLesson {
	module_index: number
	changedContent: IListModule[]
	listModule: { id: number; order: number }[]
}

export interface IChangedModule {
	changedContent: IModuleData[]
	module: {
		id: number
		order: number
	}[]
}

export interface ITrashLesson {
	id: number
}
