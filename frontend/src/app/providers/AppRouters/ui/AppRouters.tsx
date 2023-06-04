import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoadingPage } from 'features/LoaderForPage'

import { RouteConfig } from 'shared/config'

export const AppRouters = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Routes>
				{RouteConfig.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
