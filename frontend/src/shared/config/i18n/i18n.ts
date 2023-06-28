import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n.use(Backend)

	.use(LanguageDetector)

	.use(initReactI18next)

	.init({
		lng: 'en',
		fallbackLng: 'en',
		debug: __IS_DEV__ ? true : false,
		backend: {
			// Задайте новый URL-адрес переводов
			loadPath: '/static/locales/{{lng}}/{{ns}}.json',
		},

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})

export default i18n
