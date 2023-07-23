import { IAboutLessonData } from 'entities/Lesson/types'

export interface IListModule {
	id: number
	lecture_id: IAboutLessonData | null
	file_task_id: number | null
	test_task_id: number | null
	module_type: EListModuleType
	order: number
	deadline?: Date
}
export function instanceOfListModule(object: any): object is IListModule {
	return 'lecture_id' in object
}
export interface ICreateListModule {
	lecture_id?: number
	file_task_id?: number
	test_task_id?: number
	module_type: EListModuleType
	module: number
}

export enum EListModuleType {
	LECTURE = '1',
	TEST_TASK = '2',
	FILE_TASK = '3',
}
