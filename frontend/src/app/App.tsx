import { Suspense } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { AppRouters } from './providers/AppRouters'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

import { Navbar } from 'widgets/ui'

import { classnames } from 'shared/lib'

const Component = () => {
	const { t, i18n } = useTranslation()
	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}
	return (
		<>
			<button onClick={toggle}>{t('perevesti')}</button>
			<div>{t('russkii-teks')} </div>
			<div> {t('privet-mir')} </div>
		</>
	)
}

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Suspense fallback="">
				<Navbar />
				<Component />
				<AppRouters />
			</Suspense>
		</div>
	)
}

export default App
