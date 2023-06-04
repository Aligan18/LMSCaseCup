import { useTranslation } from 'react-i18next'

import { TranslateButton } from 'features/Translate'

import { Loader } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<TranslateButton />
			<Loader />
			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
