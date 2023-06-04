import { useTranslation } from 'react-i18next'

export const TranslateButton = () => {
	const { t, i18n } = useTranslation()
	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}
	return <button onClick={toggle}>{t('perevesti')}</button>
}
