import { useSelector } from 'react-redux'

import { getCourseStudentData } from '../models/selectors/getCourseStudentData'

export const useStudentHasAccess = (courseId: number | string): boolean | string => {
	if (courseId) {
		const courseStudentData = useSelector(getCourseStudentData)
		console.log('courseStudentData', courseStudentData)
		const studentHasCourse = courseStudentData.find((course) => course.course === Number(courseId))
		console.log('studentHasCourse', studentHasCourse)
		return studentHasCourse ? true : false
	}
	return false
}
