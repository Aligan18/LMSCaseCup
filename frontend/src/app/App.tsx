import { Suspense } from 'react'

import { AppRouters } from './providers/AppRouters'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

import { Navbar, Sidebar } from 'widgets/ui'

import { LoadingPage } from 'features/LoaderForPage'

import { classnames } from 'shared/lib'

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={classnames('app', [theme])}>
			<Suspense fallback={<LoadingPage />}>
				<Navbar />
				<Sidebar />
				<AppRouters />
			</Suspense>
		</div>
	)
}

export default App
