import classes from './CreateCoursePage.module.scss'

import { FileUploader } from 'widgets/FileUploader'

import { BackButton } from 'features/BackButton'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, Input, SelectOption, TextInput } from 'shared/ui'

const CreateCoursePage = ({ styles }: ICreateCoursePageProps) => {
	return (
		<div className={cn(classes.CreateCoursePage, [styles])}>
			<div className={classes.left_button}>
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
			<div className={classes.right_block}>
				<Htag tag={'small'}>Название курса</Htag>
				<Htag tag={'very-small'}>До 20 символов</Htag>
				<Input variation={'clear'}>Название</Input>
				<Htag tag={'small'}>Описание урока</Htag>
				<Htag tag={'very-small'}>До 80 символов</Htag>
				<TextInput>Описание</TextInput>

				<SelectOption
					title={'Длительность курса'}
					name_title={''}
					id_title={''}
					value_title={'1 месяц'}
				/>
			</div>
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
			<div className={classes.bottom_block}>
				<FileUploader />
			</div>
		</div>
	)
}

export default CreateCoursePage

interface ICreateCoursePageProps {
	styles?: string
}
