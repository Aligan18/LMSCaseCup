import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { CoursesPage } from 'pages/CoursesPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum ERoutePath {
	ABOUT = '/about',
	HOME = '/',
	NOT_FOUND = '*',
	COURSES = '/courses',
}

export const RouteConfig: Array<RouteProps> = [
	{
		path: ERoutePath.ABOUT,
		element: <AboutPage />,
	},
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
]
