import { useTranslation } from 'react-i18next'

import { TranslateButton } from 'features/Translate'

import { Button, Icon, ListItem, Loader } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<TranslateButton />
			<Loader />
			<ListItem
				left={
					<Icon
						icon="right"
						variation="secondary"
					/>
				}
			>
				Мое обучение
			</ListItem>
			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
