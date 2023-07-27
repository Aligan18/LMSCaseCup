import classes from './ProfilePage.module.scss'

import { Avatar } from 'entities/Avatar'
import { AboutStudentList } from 'entities/Users/Student/AboutStudentList'
import { IColumnNames, IStudentAboutData } from 'entities/Users/Student/types'

import { classnames as cn } from 'shared/lib'
import { Header, Htag } from 'shared/ui'

export const ProfilePage = ({ styles, data, isColumnNames }: IProfilePageProps) => {
	const columnNames: IColumnNames = {
		id: '1',
		student: {
			id: 1,
			avatar: null,
			email: 'Email',
			phone: 'Телефон',
			is_active: 'Статус',
		},
		name: 'Имя',
		surname: '',
		patronymic: '',
		grade: 'Оценка',
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
					<Header title={'Личный кабинет'} />
				</div>
				<div className={classes.card}>
					<Avatar
						image={data?.student.avatar}
						size="large"
					/>
					<AboutStudentList />
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
