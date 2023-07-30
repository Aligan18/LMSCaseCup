import classes from './ProfilePage.module.scss'

import { Avatar } from 'entities/Avatar'
import { AboutStudentList } from 'entities/Users/Student/AboutStudentList'
import { IColumnNames, IStudentAboutData } from 'entities/Users/Student/types'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextBox, TextInput } from 'shared/ui'

export const ProfilePage = ({ styles, data, isColumnNames }: IProfilePageProps) => {
	const columnNames: IColumnNames = {
		student: {
			id: 1,
			avatar: null,
			email: 'email@gmail.ru',
			phone: '8 800 555 3535',
			is_active: 'Статус',
		},
		name: 'Имя',
		surname: 'Фамилия',
		patronymic: 'Отчество',
		grade: 'Оценка',
		about: 'HJHJ ssj',
	}

	if (isColumnNames) {
		return (
			<div className={cn(classes.AboutStudentList, [styles])}>
				<div></div>
				<Htag tag={'small'}>{columnNames.student.email}</Htag>
				<Htag tag={'small'}>{columnNames.surname}</Htag>
				<Htag tag={'small'}>{columnNames.student.phone}</Htag>
				<Htag tag={'small'}>{columnNames.student.is_active}</Htag>
				<Htag tag={'small'}>{columnNames.grade}</Htag>
				<div></div>
			</div>
		)
	}
	return (
		<div className={cn(classes.ProfilePage, [styles])}>
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header
						title={'Личный кабинет'}
						buttons={
							<Button
								variation="primary"
								styles={classes.button}
								format={'small'}
							>
								Редактировать
								<Icon
									icon={'settings'}
									variation={'white'}
								></Icon>
							</Button>
						}
					/>
				</div>
				<div className={classes.card}>
					<div className={classes.ava}>
						<Avatar
							image={data?.student.avatar}
							size="large"
						/>
					</div>

					<div className={classes.full_name}>
						<Htag tag={'large'}>{columnNames.surname}</Htag>
						<Htag tag={'large'}>{columnNames.name}</Htag>
						<Htag tag={'large'}>{columnNames.patronymic}</Htag>
					</div>
					<div className={classes.contacts}>
						<Htag tag={'medium'}>{columnNames.student.email}</Htag>
						<Htag tag={'small'}>{columnNames.student.phone}</Htag>
					</div>
					<div className={classes.about}>
						<Htag tag={'medium'}>О себе</Htag>
						<Htag tag={'small'}>{columnNames.about}</Htag>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage

interface IProfilePageProps {
	styles?: string
	data?: IStudentAboutData
	isColumnNames?: boolean
}
