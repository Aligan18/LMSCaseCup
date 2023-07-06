import { useTranslation } from 'react-i18next'

import classes from './AboutStudentList.module.scss'

import { Avatar } from 'entities/Avatar'
import { StarsGroup } from 'entities/StarsGroup'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const AboutStudentList = ({ styles }: IAboutStudentListProps) => {
	const { t } = useTranslation('admin')

	return (
		<div className={cn(classes.AboutStudentList, [styles])}>
			<Avatar size="small" />
			<Htag tag={'small'}>test@test.ru</Htag>
			<Htag tag={'small'}>Test Test Test</Htag>
			<Htag tag={'small'}>+77077077070</Htag>
			<Htag tag={'small'}>{t('aktivnyi')}</Htag>
			<StarsGroup
				rating={4}
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
}
