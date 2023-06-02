import { Suspense } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { classnames } from 'shared/lib'
import { Navbar } from 'widgets/ui'
import { AppRouters } from './providers/AppRouters'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

const Component = () => {
	const { t, i18n } = useTranslation()
	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<>
			<button onClick={toggle}>{t('perevesti')}</button>
			<div>{t('russkii-teks')} </div>
		</>
	)
}

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Suspense fallback=''>
				<Navbar />
				<Component />
				<AppRouters />
			</Suspense>
		</div>
	)
}

export default App
