import { useSelector } from 'react-redux'

import { getListGradeData } from '../models/selectors/getListGradeData'
import { IGradeData } from '../types'

export const useLastAttendance = (): IGradeData | null => {
	const grades = useSelector(getListGradeData)
	if (grades.length > 0) {
		const grade = grades.pop()
		if (grade !== undefined) {
			return grade
		}
	} else if (grades.length === 0) {
		return null
	}
	return null
}
