import { useTranslation } from 'react-i18next'

import classes from './CreateCourseButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'

export const CreateCourseButton = ({ styles, ...props }: ICreateCourseButtonProps) => {
	const { t } = useTranslation('course')
	return (
		<Button
			onClick={(e) => {
				console.log('CLICKED')
			}}
			styles={[classes.CreateCourse, styles].join(' ')}
			{...props}
		>
			{t('sokhranit')}
			<Icon
				variation={'secondary'}
				icon={'save'}
			/>
		</Button>
	)
}

interface ICreateCourseButtonProps {
	styles?: string
	disabled?: boolean
}
