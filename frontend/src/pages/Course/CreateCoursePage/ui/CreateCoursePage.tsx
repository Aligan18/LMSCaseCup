import classes from './CreateCoursePage.module.scss'

import { FileUploader } from 'widgets/FileUploader'

import { BackButton } from 'features/BackButton'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, Input, SelectOption, TextInput } from 'shared/ui'

const CreateCoursePage = ({ styles }: ICreateCoursePageProps) => {
	return (
		<div className={cn(classes.CreateCoursePage, [styles])}>
			<div className={classes.top_button}>
				<BackButton />
			</div>
			<Header
				title={'Создание курса'}
				buttons={
					<>
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							Опубликовать
							<Icon
								variation={'secondary'}
								icon={'done'}
							/>
						</Button>
						<Button
							variation="clear"
							styles={classes.button}
							format={'small'}
						>
							Сохранить черновик
						</Button>
					</>
				}
			/>
			<div className={classes.top_block}>
				<Htag tag={'small'}>Длительность курса</Htag>
				<Button
					variation="primary"
					styles={classes.button}
					format={'small'}
				>
					Сохранить
					<Icon
						variation={'secondary'}
						icon={'save'}
					/>
				</Button>
			</div>
			<div className={classes.bottom_block}></div>
			<FileUploader />
		</div>
	)
}

export default CreateCoursePage

interface ICreateCoursePageProps {
	styles?: string
}
