import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { GoogleAuthButton } from 'features/GoogleAuthButton'
import { TranslateButton } from 'features/Translate'

import { Card } from 'entities/Card/ui/Card'
import { StarsGroup } from 'entities/StarsGroup'

import { Button, Icon, ListItem, Loader } from 'shared/ui'

const HomePage = () => {
	const [rating, setRating] = useState<number>(0)
	const { t } = useTranslation('home')
	return (
		<div>
			<Loader />
			<GoogleAuthButton />
			<Card />
			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
