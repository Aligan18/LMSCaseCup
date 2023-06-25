import { useTranslation } from 'react-i18next'

import { GoogleAuthButton } from 'features/GoogleAuthButton'
import { TranslateButton } from 'features/Translate'

import { Button, Icon, ListItem, Loader } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<TranslateButton />
			<Loader />
			<GoogleAuthButton />
			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
