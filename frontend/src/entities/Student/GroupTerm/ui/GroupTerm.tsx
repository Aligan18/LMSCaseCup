import classes from './GroupTerm.module.scss'

import { classnames as cn } from 'shared/lib'
import { CircleForIcon, Htag, Icon, Tag } from 'shared/ui'
import { ListItem } from 'shared/ui/ListItem/ListItem'

export const GroupTerm = ({ styles }: IGroupTermProps) => {
	return (
		<div className={cn(classes.GroupTerm, [styles])}>
			<ListItem
				styles={classes.wrapper}
				hover={'none'}
				variation={'inverted-secondary'}
				mid_up={<Htag tag={'very-small'}>01.01.2023 - 01.01.2024</Htag>}
				mid_down={
					<div className={classes.tags}>
						<Tag
							size="small"
							variation={'primary'}
						></Tag>
						<Tag
							size="small"
							variation={'secondary'}
						></Tag>
					</div>
				}
				right={
					<div className={classes.buttons}>
						<CircleForIcon variation="primary">
							<Icon
								icon={'up'}
								variation={'primary'}
							/>
						</CircleForIcon>
					</div>
				}
			>
				<Htag
					styles={classes.title}
					tag={'medium'}
				>
					Группа №1
				</Htag>
			</ListItem>
		</div>
	)
}

interface IGroupTermProps {
	styles?: string
}
