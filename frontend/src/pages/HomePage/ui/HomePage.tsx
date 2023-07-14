import { useTranslation } from 'react-i18next'

import classes from './HomePage.module.scss'

import { FileUploader } from 'widgets/FileUploader/ui/FileUploader'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { Grade } from 'entities/Grade/ui/Grade'

import { DoughnutChart, Loader, VerticalBarChart } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<Loader />
			<GoogleAuthButton />
			<Grade />
			<div className={classes.chart_bar}>
				<VerticalBarChart />
			</div>
			<div className={classes.chart_doughnut}>
				<DoughnutChart />
			</div>

			{t('glavnaya-stranica')}
			<FileUploader />
		</div>
	)
}

export default HomePage
