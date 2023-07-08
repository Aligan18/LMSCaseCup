import { useTranslation } from 'react-i18next'

import classes from './CreateLessonPage.module.scss'

import { LessonConstructor } from 'widgets/Lesson/LessonConstructor'
import { LessonFormSteps } from 'widgets/Lesson/LessonFormSteps'

import { BackButton } from 'features/BackButton'

import { classnames as cn } from 'shared/lib'

const CreateLessonPage = ({ styles }: ICreateLessonPageProps) => {
	const { t } = useTranslation('admin')
	return (
		<div className={cn(classes.CreateLessonPage, [styles])}>
			<div className={classes.form}>
				<LessonFormSteps />
			</div>
			<div className={classes.lesson}>
				<BackButton />
				<LessonConstructor />
			</div>
		</div>
	)
}

export default CreateLessonPage
interface ICreateLessonPageProps {
	styles?: string
}
