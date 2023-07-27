import { useSelector } from 'react-redux'

import { getCourseStudentData } from '../models/selectors/getCourseStudentData'

export const useStudentHasAccess = (courseId: number | string): boolean => {
	const courseStudentData = useSelector(getCourseStudentData)

	const studentHasCourse = courseStudentData.find((course) => course.id === Number(courseId))
	return studentHasCourse ? true : false
}
