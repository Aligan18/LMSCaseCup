import { useTranslation } from 'react-i18next'

import { Icon } from 'shared/ui'

export const TranslateButton = () => {
	const { t, i18n } = useTranslation()
	const toggle = async () => {
		await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}
	return (
		<Icon
			icon={'language'}
			data-testid="TEST"
			onClick={toggle}
		/>
	)
}
