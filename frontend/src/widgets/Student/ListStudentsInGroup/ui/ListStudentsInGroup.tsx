import classes from './ListStudentsInGroup.module.scss'

import { AboutStudentList } from 'entities/Student/AboutStudentList'
import { GroupTerm } from 'entities/Student/GroupTerm'
import {
	IAboutGroupData,
	IOnlyStudentsInGroupData,
	IStudentAboutData,
} from 'entities/Student/types'

import { classnames as cn } from 'shared/lib'
import { List } from 'shared/ui'
import { AccordionWrapper } from 'shared/ui/AccordionWrapper/AccordionWrapper'

export const ListStudentsInGroup = ({ styles, groupData }: IListStudentsInGroupProps) => {
	const studentsList: IOnlyStudentsInGroupData = {
		students: [
			{
				id: 1,
				student: {
					avatar: null,
					email: '00694234239@stud.satbayev.university',
					phone: '+77077077070',
					is_active: true,
				},
				name: 'Иван',
				surname: 'Иванов',
				patronymic: 'Иванович',
				grade: 5,
			},
			{
				id: 2,
				student: {
					avatar: null,
					email: '00694234239@stud.satbayev.university',
					phone: '+77077077070',
					is_active: true,
				},
				name: 'Иван',
				surname: 'Иванов',
				patronymic: 'Иванович',
				grade: 5,
			},
		],
	}

	return (
		<div className={cn(classes.ListStudentsInGroup, [styles])}>
			<AccordionWrapper
				main={<GroupTerm data={groupData} />}
				renderItems={
					<div className={classes.list_wrapper}>
						<AboutStudentList isColumnNames={true} />
						<List
							styles={classes.list_styles}
							variation="list"
							items={studentsList.students}
							renderItem={(student: IStudentAboutData) => (
								<AboutStudentList data={student} />
							)}
						/>
					</div>
				}
			/>
		</div>
	)
}

interface IListStudentsInGroupProps {
	styles?: string
	groupData: IAboutGroupData
}
