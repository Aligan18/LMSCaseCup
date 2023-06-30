import classes from './AboutCourse.module.scss'

import { classnames as cn } from 'shared/lib'
import { Htag, Icon } from 'shared/ui'

export const AboutCourse = ({ styles }: IAboutCourseProps) => {
	return (
		<div className={cn(classes.AboutCourse, [styles])}>
			<div className={classes.tegs}>
				<div className={cn(classes.first_teg, [classes.teg])}>
					<Icon
						icon={'clock'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>2 месяца</Htag>
				</div>
				<div className={cn(classes.second_teg, [classes.teg])}>
					<Icon
						icon={'video'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>16 уроков</Htag>
				</div>
				<div className={cn(classes.third_teg, [classes.teg])}>
					<Icon
						icon={'file'}
						cursor="cursor_none"
					/>
					<Htag tag={'very-small'}>24 материала</Htag>
				</div>
			</div>
		</div>
	)
}

interface IAboutCourseProps {
	styles?: string
}
