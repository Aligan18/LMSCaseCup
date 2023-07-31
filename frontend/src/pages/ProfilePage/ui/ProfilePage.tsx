import { useTranslation } from 'react-i18next'

import classes from './ProfilePage.module.scss'

import { CreateProfileForm } from 'features/Profile/CreateProfileForm'

import { Avatar } from 'entities/Avatar'
import { AboutStudentList } from 'entities/Users/Student/AboutStudentList'
import { IColumnNames, IStudentAboutData } from 'entities/Users/Student/types'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextBox, TextInput } from 'shared/ui'

export const ProfilePage = ({ styles, data, isColumnNames }: IProfilePageProps) => {
	const { t } = useTranslation('')

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
		about: 'Информация о себе',
		sex: 'Мужской',
		country: 'Казахстан',
		university: 'АГКНТ',
		age: 20,
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
				<Htag tag={'small'}>{columnNames.about}</Htag>
				<Htag tag={'small'}>{columnNames.sex}</Htag>
				<Htag tag={'small'}>{columnNames.country}</Htag>
				<Htag tag={'small'}>{columnNames.university}</Htag>
				<Htag tag={'small'}>{columnNames.age}</Htag>

				<div></div>
			</div>
		)
	}
	return (
		<div className={cn(classes.ProfilePage, [styles])}>
			<div className={classes.main}>
				<div className={classes.wrapper}>
					<Header
						title={`${t('lichnyi-kabinet')}`}
						buttons={
							<Button
								variation="primary"
								styles={classes.button}
								format={'small'}
							>
								{t('redaktirovat')}
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
					<div className={classes.information}>
						<Htag tag={'medium'}>{t('o-sebe')}</Htag>
						<TextBox
							size={'medium'}
							styles={classes.about_box}
						>
							{columnNames.about}
						</TextBox>
						<Htag tag={'medium'}>{t('pol')} {columnNames.sex}</Htag>
						<Htag tag={'medium'}>{t('vozrast')} {columnNames.age}</Htag>
						<Htag tag={'medium'}>{t('strana')} {columnNames.country}</Htag>
						<Htag tag={'medium'}>{t('universitet')} {columnNames.university}</Htag>
					</div>
				</div>
				<CreateProfileForm />
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
