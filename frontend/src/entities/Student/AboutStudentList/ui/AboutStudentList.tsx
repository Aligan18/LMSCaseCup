import { useTranslation } from 'react-i18next'

import classes from './AboutStudentList.module.scss'

import { Avatar } from 'entities/Avatar'
import { StarsGroup } from 'entities/StarsGroup'
import { IStudentAboutData } from 'entities/Student/types'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const AboutStudentList = ({ styles, data, isColumnNames }: IAboutStudentListProps) => {
	const { t } = useTranslation('admin')

	const columnNames: IColumnNames = {
		id: '1',
		avatar: null,
		email: 'Email',
		name: 'Имя',
		surname: null,
		patronymic: null,
		phone: 'Телефон',
		is_active: 'Статус',
		grade: 'Оценка',
	}

	if (isColumnNames) {
		return (
			<div className={cn(classes.AboutStudentList, [styles])}>
				<div></div>
				<Htag tag={'small'}>{columnNames.email}</Htag>
				<Htag tag={'small'}>{columnNames.surname}</Htag>
				<Htag tag={'small'}>{columnNames.phone}</Htag>
				<Htag tag={'small'}>{columnNames.is_active}</Htag>
				<Htag tag={'small'}>{columnNames.grade}</Htag>
				<div></div>
			</div>
		)
	}

	return (
		<div className={cn(classes.AboutStudentList, [styles])}>
			<Avatar
				image={data.avatar}
				size="small"
			/>
			<Htag tag={'small'}>{data.email}</Htag>
			<Htag tag={'small'}>{`${data.surname} ${data.name} ${data.patronymic}`}</Htag>
			<Htag tag={'small'}>{data.phone}</Htag>
			<Htag tag={'small'}>{data.is_active && t('aktivnyi')}</Htag>
			<StarsGroup
				rating={data.grade}
				changeable={false}
			></StarsGroup>
			<Button
				variation="primary"
				styles={classes.button}
				format={'small'}
			>
				{t('pereiti-0')}
				<Icon
					variation={'secondary'}
					icon={'link'}
				/>
			</Button>
		</div>
	)
}

interface IAboutStudentListProps {
	styles?: string
	data?: IStudentAboutData
	isColumnNames?: boolean
}

interface IColumnNames extends Record<keyof IStudentAboutData, string> {
	grade: string
}
