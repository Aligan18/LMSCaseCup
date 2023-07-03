import { useTranslation } from 'react-i18next'

import { FileUploader } from 'widgets/FileUploader/ui/FileUploader'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { Grade } from 'entities/Grade/ui/Grade'

import { Loader } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<Loader />
			<GoogleAuthButton />
			<Grade />

			{t('glavnaya-stranica')}
			<FileUploader />
		</div>
	)
}

export default HomePage
