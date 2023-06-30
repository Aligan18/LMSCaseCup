import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { CourseCard } from 'entities/CourseCard'

import { Button, Icon, ListItem, Loader } from 'shared/ui'

const HomePage = () => {
	const [rating, setRating] = useState<number>(0)
	const { t } = useTranslation('home')
	return (
		<div>
			<Loader />
			<GoogleAuthButton />

			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
