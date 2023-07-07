import { useTranslation } from 'react-i18next'

import classes from './CreateLessonPage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateLessonButton } from 'features/Lesson/CreateLessonButton'
import { CreateLessonForm } from 'features/Lesson/CreateLessonForm'

import { classnames as cn } from 'shared/lib'
import { Header } from 'shared/ui'

const CreateLessonPage = ({ styles }: ICreateLessonPageProps) => {
	const { t } = useTranslation('admin')
	return (
		<div className={cn(classes.CreateLessonPage, [styles])}>
			<div>
				<BackButton />
			</div>
			<div className={classes.wrapper}>
				<Header
					title={t('dobavlenie-uroka')}
					buttons={<CreateLessonButton />}
				/>
				<CreateLessonForm />
			</div>
		</div>
	)
}

export default CreateLessonPage
interface ICreateLessonPageProps {
	styles?: string
}
