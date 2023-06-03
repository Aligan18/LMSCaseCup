import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'

import { RouteConfig } from 'shared/config'

export const AppRouters = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{RouteConfig.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
				{/* <Route path={"/about"} element={<HomePage/>}/> */}
			</Routes>
		</Suspense>
	)
}
