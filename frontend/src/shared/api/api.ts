export const API = {
	auth: {
		jwt: {
			create: process.env.REACT_APP_API_URL + '/auth/jwt/create/',
		},
		users: {
			create: process.env.REACT_APP_API_URL + '/auth/users/',
			me: process.env.REACT_APP_API_URL + '/auth/users/me/',
		},
	},
	accounts: { activate: process.env.REACT_APP_API_URL + '/accounts/activate/' },
	custom_user: {
		update: process.env.REACT_APP_API_URL + '/auth/users/me/',
	},
	lectures: {
		additions: {
			create: '/lectures-additions/create/',
		},
		lesson: {
			create: '/lectures-lesson/create/',
		},
		create: '/lectures/create/',
		retrieve: '/lectures/id/',
	},
	teachers: {
		id: '/teachers/id/',
	},
	admin: {
		rud: '/admins/rud/',
	},
	students: {
		rud: '/students/rud/',
		id: '/students/id/',
	},
	course_students: {
		list: '/course_student/list/',
		create: '/students_course/create/',
	},
	attendance: {
		create: '/attendance/create/',
	},
	grades: {
		grades_student: '/grades_student/list/',
	},

	course: {
		create: '/course/create/',
		retrieve: '/course/id/',
		update: '/course/update/',
		list: '/course/list/',
		only_students: '/course_students/list/',
	},
	ticket: {
		list: '/student_ticket/list/',
		create: '/student_ticket/create/',
		one_student: '/one_student_ticket/list/', // требует /?student=<id>
		retrieve: '/student_ticket/id/',
		rud: '/student_ticket/rud/',
	},
	modules: {
		list: '/modules/list/',
		retrieve: '/modules/id/',
		create: '/modules/create/',
		rud: '/modules/rud/',
	},
	list_modules: {
		retrieve: '/list_modules/id/',
		rud: '/list_modules/rud/',
		create: '/list_modules/create/',
	},
	file_tasks: {
		create: '/file_tasks/create/',
		retrieve: '/file_tasks/id/',
	},
}

export type IAPI = typeof API
