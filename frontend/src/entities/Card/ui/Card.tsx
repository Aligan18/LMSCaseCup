import classes from './Card.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'
import { Htag } from 'shared/ui/Htag/Htag'
import { TextBox } from 'shared/ui/TextBox/TextBox'

export const Card = ({ styles }: ICardProps) => {
	return (
		<div className={cn(classes.Card, [styles])}>
			<div className={classes.image}>
				<img />
			</div>

			<div className={classes.tegs}>
				<div className={classes.title}>
					<Htag tag={'medium'}>Название курса</Htag>
				</div>
				<div className={cn(classes.first_teg, [classes.teg])}>
					<Icon icon={'clock'} />
					<Htag tag={'very-small'}>2 месяца</Htag>
				</div>
				<div className={cn(classes.second_teg, [classes.teg])}>
					<Icon icon={'video'} />
					<Htag tag={'very-small'}>16 уроков</Htag>
				</div>
				<div className={cn(classes.third_teg, [classes.teg])}>
					<Icon icon={'file'} />
					<Htag tag={'very-small'}>24 материала</Htag>
				</div>
			</div>

			<TextBox size={'medium'}>Описание курса Описание курса</TextBox>
			<div className={classes.wrapper_button}>
				<Button
					styles={classes.button}
					format={'small'}
				>
					Подробнее{' '}
					<Icon
						variation={'secondary'}
						icon={'link'}
					/>
				</Button>
			</div>
		</div>
	)
}

interface ICardProps {
	styles?: string
}

