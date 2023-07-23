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
	students: {
		id: '/students/id/',
	},
	course: {
		create: '/course/create/',
		retrieve: '/course/id/',
		update: '/course/update/',
		list: '/course/list/',
	},
	ticket: {
		create: '/student_ticket/create/',
	},
	modules: {
		list: '/modules/list/',
		retrieve: '/modules/id/',
		create: '/modules/create/',
		rud: '/modules/rud/',
	},
	list_modules: {
		rud: '/list_modules/rud/',
		create: '/list_modules/create/',
	},
}

export type IAPI = typeof API
