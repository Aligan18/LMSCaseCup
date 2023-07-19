import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import classes from './EditCoursePage.module.scss'

import { ERoutePath } from 'app/providers/AppRouters'

import { BackButton } from 'features/BackButton'
import { CreateCourseForm } from 'features/Course/CreateCourseForm'

import { FileUploader } from 'entities/FileUploader'

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
							<Link to={ERoutePath.CREATE_LESSON}>
								<Button
									variation="primary"
									styles={classes.button}
									format={'small'}
								>
									{t('dobavit-urok-0')}
								</Button>
							</Link>
						}
					/>
				</div>
				<div className={classes.left_block}>
					<CreateCourseForm />
				</div>
				<div className={classes.right_block}></div>
			</div>
		</div>
	)
}
export default EditCoursePage

interface IEditCoursePageProps {
	styles?: string
}
