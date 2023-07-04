import classes from './CreateCoursePage.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon } from 'shared/ui'

const CreateCoursePage = ({ styles }: ICreateCoursePageProps) => {
	return (
		<div className={cn(classes.CreateCoursePage, [styles])}>
			<Button
				variation="primary"
				styles={classes.button}
				format={'small'}
			>
				<Icon
					variation={'secondary'}
					icon={'left'}
				/>
				Назад
			</Button>
			<div className={classes.top_block}>
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
			</div>
			<div className={classes.bottom_block}>
				<Htag tag={'small'}>Название курса</Htag>
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
		</div>
	)
}

export default CreateCoursePage

interface ICreateCoursePageProps {
	styles?: string
}
