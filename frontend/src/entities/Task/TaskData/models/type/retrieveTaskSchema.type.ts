import { IListModuleTaskData } from 'entities/Module/types'
import { ITaskData } from 'entities/Task/types'

export interface IRetrieveTaskSchema {
	isLoading: boolean
	error?: string
	taskData: IListModuleTaskData | null
}
