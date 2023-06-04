import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum RoutePath {
	ABOUT = '/about',
	HOME = '/',
	NOT_FOUND = '*',
}

export const RouteConfig: Array<RouteProps> = [
	{
		path: RoutePath.ABOUT,
		element: <AboutPage />,
	},
	{
		path: RoutePath.HOME,
		element: <HomePage />,
	},
	{
		path: RoutePath.NOT_FOUND,
		element: <NotFoundPage />,
	},
]
