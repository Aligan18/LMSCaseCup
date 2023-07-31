import { useSelector } from 'react-redux'

import { getListGradeData } from '../models/selectors/getListGradeData'
import { IGradeData } from '../types'

import { useListModuleFindId } from 'features/Lesson/CreateAttendanceButton'

import { getAllModuleData } from 'entities/Module/ModuleData'
import { IListModule } from 'entities/Module/types'
import { IListModuleLectureData } from 'entities/Module/types/ListModule.types'

export const useLastAttendance = (module_index: number): IOutput => {
	const grades = useSelector(getListGradeData)
	const modules = useSelector(getAllModuleData)
	const grade = grades[grades.length - 1]
	const nextAndPrevious = useListModuleFindId(Number(module_index), grade?.list_modules?.id)

	const isDisabled = (data: IListModule | IListModuleLectureData, lastAttendance: IGradeData | null | undefined) => {
		if (lastAttendance) {
			if (lastAttendance && lastAttendance?.list_modules?.order >= data.order) {
				return false
			} else {
				return true
			}
		} else if (lastAttendance === null) {
			if (modules[0].list_modules[0].order === data.order) {
				return false
			} else {
				return true
			}
		} else {
			return true
		}
	}

	if (grades.length >= 1 && nextAndPrevious) {
		console.log('nextAndPrevious.next', nextAndPrevious.next)
		return { lastAttendance: { ...grade, list_modules: nextAndPrevious.next }, isDisabled: isDisabled }
	} else if (grades.length === 0) {
		return { lastAttendance: null, isDisabled: isDisabled }
	}
	return { lastAttendance: undefined, isDisabled: isDisabled }
}

interface IOutput {
	lastAttendance: IGradeData | null | undefined
	isDisabled: (data: IListModule | IListModuleLectureData, lastAttendance: IGradeData | null | undefined) => boolean
}
