import { useTranslation } from 'react-i18next'

import classes from './CreateCoursePage.module.scss'

import { FileUploader } from 'widgets/FileUploader'

import { BackButton } from 'features/BackButton'
import { CreateCourseForm } from 'features/Course/CreateCourseForm'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, Input, SelectOption, TextInput } from 'shared/ui'

const CreateCoursePage = ({ styles }: ICreateCoursePageProps) => {
	const { t } = useTranslation('course')

	return (
		<div className={cn(classes.CreateCoursePage, [styles])}>
			<BackButton />
			<div className={classes.wrapper}>
				<Header
					title={`${t('sozdanie-kursa')}`}
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

export default CreateCoursePage

interface ICreateCoursePageProps {
	styles?: string
}
