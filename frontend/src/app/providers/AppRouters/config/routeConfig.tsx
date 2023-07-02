import { RouteProps } from 'react-router-dom'

import { AboutCoursePage } from 'pages/AboutCoursePage'
import { CoursesPage } from 'pages/CoursesPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { TicketsPage } from 'pages/TicketsPage'

export enum ERoutePath {
	HOME = '/',
	NOT_FOUND = '*',
	COURSES = '/courses',
	TICKETS = '/tickets',
	ABOUT_COURSE = '/about_course/:id',
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
]
