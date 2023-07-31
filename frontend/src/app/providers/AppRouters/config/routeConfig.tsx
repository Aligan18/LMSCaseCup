import { RouteProps } from 'react-router-dom'

import { GroupListPage } from 'pages/Admin/GroupListPage'
import { TeacherRoomPage } from 'pages/Admin/TeacherRoomPage'
import { ViewAnswerPage } from 'pages/Admin/ViewAnswerPage'
import { ActivationPage } from 'pages/Authorization/ActivationPage'
import { AfterRegistrationPage } from 'pages/Authorization/AfterRegistrationPage'
import { AuthorizationPage } from 'pages/Authorization/AuthorizationPage'
import { AboutCoursePage } from 'pages/Course/AboutCoursePage'
import { CoursesPage } from 'pages/Course/CoursesPage'
import { CreateCoursePage } from 'pages/Course/CreateCoursePage'
import { EditCoursePage } from 'pages/Course/EditCoursePage'
import { HomePage } from 'pages/HomePage'
import { CreateLessonPage } from 'pages/Lesson/CreateLessonPage'
import { LessonPage } from 'pages/Lesson/LessonPage'
import { CreateModulePage } from 'pages/Module/CreateModulePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { CreateAnswerPage } from 'pages/Task/CreateAnswerPage'
import { AboutTicketPage } from 'pages/Ticket/AboutTicketPage'
import { AllTicketsPage } from 'pages/Ticket/AllTicketsPage'
import { CreateTicketAnswerPage } from 'pages/Ticket/CreateTicketAnswerPage'
import { CreateTicketPage } from 'pages/Ticket/CreateTicketPage'
import { TicketsPage } from 'pages/Ticket/TicketsPage'

export enum ERoutePath {
	HOME = '/',
	NOT_FOUND = '*',
	COURSES = '/courses',
	ABOUT_COURSE = '/course/:course_id/about/',
	LESSON = '/course/:course_id/module/:module_index/list_modules/:list_module_id/',

	CREATE_COURSE = '/create_course',
	EDIT_COURSE = '/edit_course/:id',

	CREATE_MODULE = '/course/:course_id/create_module',
	CREATE_LESSON = '/course/:course_id/module/:module_id/create_lesson',
	EDIT_LESSON = '/module/:module_id/edit_lesson/:lesson_id',

	TEACHER_ROOM = '/teacher_room',
	VIEW_ANSWER = '/view_answer/:id',
	CREATE_ANSWER = '/create_answer/:id',
	GROUP_LIST = '/course/:course_id/group_list',
	AUTHORIZATION = '/authorization',
	ACTIVATION = '/activation/:uid/:token',
	AFTER_REGISTRATION = '/after_registration',

	PROFILE = '/profile/:id',
	TICKETS = '/tickets',
	CREATE_TICKET = '/create_ticket',
	CREATE_TICKET_ANSWER = '/create_ticket_answer/:id',
	ALL_TICKETS = '/all_tickets',
	ABOUT_TICKET = '/about_ticket/:id',
}

export type ILESSON_Params = {
	module_index: string
	list_module_id: string
	course_id: string
}
export type IGROUP_LIST_Params = {
	course_id: string
}
export type ILAST_ID_Params = {
	id: string
}
export type IActivationParams = {
	uid: string
	token: string
}

export type IEDIT_LESSON_Params = {
	module_id: string
	lesson_id: string
}

export type ICREATE_LESSON_Params = {
	course_id: string
	module_id: string
}

export type ICREATE_MODULE_Params = {
	course_id: string
}
export type IABOUT_COURSE_Params = {
	course_id: string
}

export const NotAuthRouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.HOME,
		element: <HomePage />,
	},
	// {
	// 	path: ERoutePath.NOT_FOUND,
	// 	element: <NotFoundPage />,
	// },
	{
		path: ERoutePath.COURSES,
		element: <CoursesPage />,
	},
	{
		path: ERoutePath.TICKETS,
		element: <TicketsPage />,
	},
	{
		path: ERoutePath.ABOUT_COURSE,
		element: <AboutCoursePage />,
	},
	{
		path: ERoutePath.CREATE_TICKET,
		element: <CreateTicketPage />,
	},

	{
		path: ERoutePath.VIEW_ANSWER,
		element: <ViewAnswerPage />,
	},
	{
		path: ERoutePath.AUTHORIZATION,
		element: <AuthorizationPage />,
	},
	{
		path: ERoutePath.ACTIVATION,
		element: <ActivationPage />,
	},
	{
		path: ERoutePath.AFTER_REGISTRATION,
		element: <AfterRegistrationPage />,
	},
	{
		path: ERoutePath.PROFILE,
		element: <ProfilePage />,
	},
]

export const StudentRouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.HOME,
		element: <HomePage />,
	},
	// {
	// 	path: ERoutePath.NOT_FOUND,
	// 	element: <NotFoundPage />,
	// },
	{
		path: ERoutePath.COURSES,
		element: <CoursesPage />,
	},
	{
		path: ERoutePath.TICKETS,
		element: <TicketsPage />,
	},
	{
		path: ERoutePath.ABOUT_COURSE,
		element: <AboutCoursePage />,
	},
	{
		path: ERoutePath.LESSON,
		element: <LessonPage />,
	},
	{
		path: ERoutePath.CREATE_TICKET,
		element: <CreateTicketPage />,
	},
	{
		path: ERoutePath.VIEW_ANSWER,
		element: <ViewAnswerPage />,
	},
	{
		path: ERoutePath.CREATE_ANSWER,
		element: <CreateAnswerPage />,
	},
	{
		path: ERoutePath.PROFILE,
		element: <ProfilePage />,
	},
	{
		path: ERoutePath.ABOUT_TICKET,
		element: <AboutTicketPage />,
	},
]

export const TeacherRouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.HOME,
		element: <HomePage />,
	},
	// {
	// 	path: ERoutePath.NOT_FOUND,
	// 	element: <NotFoundPage />,
	// },
	{
		path: ERoutePath.COURSES,
		element: <CoursesPage />,
	},
	{
		path: ERoutePath.TICKETS,
		element: <TicketsPage />,
	},
	{
		path: ERoutePath.ABOUT_COURSE,
		element: <AboutCoursePage />,
	},
	{
		path: ERoutePath.LESSON,
		element: <LessonPage />,
	},
	{
		path: ERoutePath.CREATE_COURSE,
		element: <CreateCoursePage />,
	},
	{
		path: ERoutePath.CREATE_TICKET,
		element: <CreateTicketPage />,
	},
	{
		path: ERoutePath.CREATE_LESSON,
		element: <CreateLessonPage />,
	},
	{
		path: ERoutePath.EDIT_COURSE,
		element: <EditCoursePage />,
	},
	{
		path: ERoutePath.TEACHER_ROOM,
		element: <TeacherRoomPage />,
	},
	{
		path: ERoutePath.VIEW_ANSWER,
		element: <ViewAnswerPage />,
	},
	{
		path: ERoutePath.EDIT_LESSON,
		element: <CreateLessonPage />,
	},
	{
		path: ERoutePath.GROUP_LIST,
		element: <GroupListPage />,
	},
	{
		path: ERoutePath.CREATE_MODULE,
		element: <CreateModulePage />,
	},
	{
		path: ERoutePath.PROFILE,
		element: <ProfilePage />,
	},
]

export const AdminRouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.HOME,
		element: <HomePage />,
	},
	// {
	// 	path: ERoutePath.NOT_FOUND,
	// 	element: <NotFoundPage />,
	// },
	{
		path: ERoutePath.COURSES,
		element: <CoursesPage />,
	},
	{
		path: ERoutePath.TICKETS,
		element: <TicketsPage />,
	},
	{
		path: ERoutePath.ABOUT_COURSE,
		element: <AboutCoursePage />,
	},
	{
		path: ERoutePath.LESSON,
		element: <LessonPage />,
	},
	{
		path: ERoutePath.CREATE_COURSE,
		element: <CreateCoursePage />,
	},
	{
		path: ERoutePath.CREATE_TICKET,
		element: <CreateTicketPage />,
	},
	{
		path: ERoutePath.CREATE_TICKET_ANSWER,
		element: <CreateTicketAnswerPage />,
	},
	{
		path: ERoutePath.CREATE_LESSON,
		element: <CreateLessonPage />,
	},
	{
		path: ERoutePath.EDIT_COURSE,
		element: <EditCoursePage />,
	},
	{
		path: ERoutePath.TEACHER_ROOM,
		element: <TeacherRoomPage />,
	},
	{
		path: ERoutePath.VIEW_ANSWER,
		element: <ViewAnswerPage />,
	},
	{
		path: ERoutePath.EDIT_LESSON,
		element: <CreateLessonPage />,
	},
	{
		path: ERoutePath.GROUP_LIST,
		element: <GroupListPage />,
	},
	{
		path: ERoutePath.CREATE_ANSWER,
		element: <CreateAnswerPage />,
	},
	{
		path: ERoutePath.AUTHORIZATION,
		element: <AuthorizationPage />,
	},
	{
		path: ERoutePath.ACTIVATION,
		element: <ActivationPage />,
	},
	{
		path: ERoutePath.AFTER_REGISTRATION,
		element: <AfterRegistrationPage />,
	},
	{
		path: ERoutePath.CREATE_MODULE,
		element: <CreateModulePage />,
	},
	{
		path: ERoutePath.PROFILE,
		element: <ProfilePage />,
	},
	{
		path: ERoutePath.ALL_TICKETS,
		element: <AllTicketsPage />,
	},
]
