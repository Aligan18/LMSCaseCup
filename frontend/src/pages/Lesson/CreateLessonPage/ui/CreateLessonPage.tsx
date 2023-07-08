import { useTranslation } from 'react-i18next'

import classes from './CreateLessonPage.module.scss'

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
			</div>
		</div>
	)
}

export default CreateLessonPage
interface ICreateLessonPageProps {
	styles?: string
}
