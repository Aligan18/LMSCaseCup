import { useTranslation } from 'react-i18next'

import classes from './EditCoursePage.module.scss'

import { FileUploader } from 'widgets/FileUploader'

import { BackButton } from 'features/BackButton'
import { CreateCourseForm } from 'features/Course/CreateCourseForm'

import { classnames as cn } from 'shared/lib'
import { Button, Header } from 'shared/ui'

export const EditCoursePage = ({ styles }: IEditCoursePageProps) => {
	const { t } = useTranslation('course')

	return (
		<div className={cn(classes.EditCoursePage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header
						title={`${t('redaktirovanie-kursa')}`}
						buttons={
							<Button
								variation="primary"
								styles={classes.button}
								format={'small'}
							>
								{t('dobavit-urok-0')}
							</Button>
						}
					/>
				</div>
				<div className={classes.left_block}>
					<CreateCourseForm />
				</div>
				<div className={classes.right_block}>
					<FileUploader />
				</div>
			</div>
		</div>
	)
}
export default EditCoursePage

interface IEditCoursePageProps {
	styles?: string
}
