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
import { CreateAnswerPage } from 'pages/Task/CreateAnswerPage'
import { CreateTicketPage } from 'pages/Ticket/CreateTicketPage'
import { TicketsPage } from 'pages/Ticket/TicketsPage'

export enum ERoutePath {
	HOME = '/',
	NOT_FOUND = '*',
	COURSES = '/courses',
	TICKETS = '/tickets',
	ABOUT_COURSE = '/about_course/:id',
	LESSON = '/lesson/:id',
	CREATE_COURSE = '/create_course',
	CREATE_TICKET = '/create_ticket',
	CREATE_LESSON = '/course/:course_id/create_lesson',
	EDIT_COURSE = '/edit_course/:id',
	TEACHER_ROOM = '/teacher_room',
	VIEW_ANSWER = '/view_answer/:id',
	EDIT_LESSON = '/course/:course_id/edit_lesson/:lesson_id',
	GROUP_LIST = '/group_list/:id',
	CREATE_ANSWER = '/create_answer/:id',
	AUTHORIZATION = '/authorization',
	ACTIVATION = '/activation',
	AFTER_REGISTRATION = '/after_registration',
	CREATE_MODULE = '/course/:course_id/create_module',
}

export type IEDIT_LESSON_Params = {
	course_id: string
	lesson_id: string
}

export type ICREATE_LESSON_Params = {
	course_id: string
}

export type ICREATE_MODULE_Params = {
	course_id: string
}

export const RouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.HOME,
		element: <HomePage />,
	},
	{
		path: ERoutePath.NOT_FOUND,
		element: <NotFoundPage />,
	},
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
]
