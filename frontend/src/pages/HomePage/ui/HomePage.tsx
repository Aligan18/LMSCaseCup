import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './HomePage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { GoogleAuthButton } from 'features/GoogleAuthButton'

import { FileUploader } from 'entities/FileUploader/ui/FileUploader'
import { Grade } from 'entities/Grade/ui/Grade'

import { Button, DoughnutChart, Htag, Icon, Loader, VerticalBarChart } from 'shared/ui'

const HomePage = () => {
	const { t } = useTranslation('home')
	return (
		<div>
			<div className={classes.wrapper}>
				<div className={classes.text}>
					<Htag tag={'very-large'}>
						{t('pokorite-novye-vershiny-znanii')} 🪂
						<br /> {t('nachnite-svoi-obrazovatelnyi-put-pryamo-seichas')}
					</Htag>

					<Htag
						tag={'medium'}
						styles={classes.small_text}
					>
						{t(
							'nachnite-smenite-ili-razvivaite-kareru-s-pomoshyu-bolee-chem-5400-kursov-professionalnykh-sertifikacii-i-diplomnykh-programm-ot-universitetov-i-kompanii-mirovogo-urovnya',
						)}
					</Htag>
				</div>

				<div className={classes.buttons}>
					<Link to={ERoutePath.AUTHORIZATION}>
						<Button
							variation="primary"
							styles={classes.button}
							format={'large'}
						>
							{t('nachat')} 🖖
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage
