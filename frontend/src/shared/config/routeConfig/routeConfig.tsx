import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'

export enum RoutePath {
	ABOUT = '/about',
	HOME = '/',
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
]