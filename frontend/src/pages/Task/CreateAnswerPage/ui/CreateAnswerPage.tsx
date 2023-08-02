import { useTranslation } from 'react-i18next'

import classes from './CreateAnswerPage.module.scss'

import { BackButton } from 'features/BackButton'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextInput, UploadFile } from 'shared/ui'

export const CreateAnswerPage = ({ styles }: ICreateAnswerPageProps) => {
	const { t } = useTranslation('course')

	return (
		<div className={cn(classes.CreateAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<Header
					title={'Задание №1'}
					buttons={
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							{t('otpravit-reshenie')}
							<Icon
								icon={'done'}
								variation={'white'}
							></Icon>
						</Button>
					}
				/>
				<div className={classes.wrapper}>
					<Htag tag={'small'}>{t('opisanie-zadaniya')}</Htag>
					<div className={classes.upload}>
						<UploadFile />
						<Htag tag={'very-small'}> {t('ili-peretashite-fail-0')}</Htag>
					</div>

					
					<Htag tag={'small'}>{t('kommentarii-k-zadaniyu')}</Htag>
					<Htag tag={'very-small'}>{t('do-300-simvolov')}</Htag>

					<TextInput styles={classes.your_message}>{t('kommentarii-0')}</TextInput>
				</div>
			</div>
		</div>
	)
}
export default CreateAnswerPage

interface ICreateAnswerPageProps {
	styles?: string
}
