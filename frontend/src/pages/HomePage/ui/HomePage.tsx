import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { CourseCard } from 'entities/CourseCard'
import { Grade } from 'entities/Grade/ui/Grade'
import { LanguageCard } from 'entities/LanguageCard/ui/LanguageCard'
import { ModuleCard } from 'entities/ModuleCard/ui/ModuleCard'
import { TicketItem } from 'entities/TicketItem'

import { Button, Icon, ListItem, Loader } from 'shared/ui'

const HomePage = () => {
	const [rating, setRating] = useState<number>(0)
	const { t } = useTranslation('home')
	return (
		<div>
			<Loader />
			<GoogleAuthButton />
			<Grade />
			<LanguageCard />
			<ModuleCard />

			{t('glavnaya-stranica')}
		</div>
	)
}

export default HomePage
