import { useTranslation } from 'react-i18next'

import classes from './CoursesPage.module.scss'

import { CourseList } from 'widgets/CourseList'

import { classnames as cn } from 'shared/lib'
import { Htag } from 'shared/ui/Htag/Htag'

const CoursesPage = ({ styles }: ICoursesPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={cn(classes.CoursesPage, [styles])}>
			<div className={classes.title}>
				<Htag tag="large">{t('vse-kursy')}</Htag>
			</div>
			<CourseList />
		</div>
	)
}

export default CoursesPage

interface ICoursesPageProps {
	styles?: string
}
