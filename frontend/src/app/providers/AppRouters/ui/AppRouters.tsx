import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ERoutePath, RouteConfig } from '../'

import { LoadingPage } from 'features/LoaderForPage'

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
				<Route
					path="*"
					element={
						<Navigate
							to={ERoutePath.HOME}
							replace
						/>
					}
				/>
			</Routes>
		</Suspense>
	)
}
