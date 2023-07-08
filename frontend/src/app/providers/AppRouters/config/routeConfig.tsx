import { RouteProps } from 'react-router-dom'

import { TeacherRoomPage } from 'pages/Admin/TeacherRoomPage'
import { AboutCoursePage } from 'pages/Course/AboutCoursePage'
import { CoursesPage } from 'pages/Course/CoursesPage'
import { CreateCoursePage } from 'pages/Course/CreateCoursePage'
import { EditCoursePage } from 'pages/Course/EditCoursePage'
import { HomePage } from 'pages/HomePage'
import { CreateLessonPage } from 'pages/Lesson/CreateLessonPage'
import { LessonPage } from 'pages/Lesson/LessonPage'
import { NotFoundPage } from 'pages/NotFoundPage'
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
	CREATE_LESSON = '/create_lesson',
	EDIT_COURSE = '/edit_course',
	TEACHER_ROOM = '/teacher_room',
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
]
