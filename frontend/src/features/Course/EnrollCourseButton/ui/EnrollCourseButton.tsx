import { useTranslation } from 'react-i18next'

import classes from './EnrollCourseButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button } from 'shared/ui'

export const EnrollCourseButton = ({ styles }: IEnrollCourseButtonProps) => {
	const { t } = useTranslation('course')

	return <Button styles={styles}>{t('zapisatsya-na-kurs')}</Button>
}

interface IEnrollCourseButtonProps {
	styles?: string
}
