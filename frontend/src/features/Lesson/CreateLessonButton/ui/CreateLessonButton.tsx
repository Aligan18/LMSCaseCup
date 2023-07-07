import { useTranslation } from 'react-i18next'

import classes from './CreateLessonButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateLessonButton = ({ styles }: ICreateLessonButtonProps) => {
	const { t } = useTranslation('admin')
	return <Button styles={cn(classes.CreateLessonButton, [styles])}>{t('dobavit-urok')}</Button>
}

interface ICreateLessonButtonProps {
	styles?: string
}
