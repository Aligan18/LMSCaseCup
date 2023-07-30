import classes from './SearchCourseInput.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon, Input } from 'shared/ui'

export const SearchCourseInput = ({ styles }: ISearchCourseInputProps) => {
	return (
		<div className={cn(classes.SearchCourseInput, [styles])}>
			<Input variation={'clear'}>Найти курс</Input>
			<Button
				styles={classes.searchButton}
				variation="clear"
			>
				<Icon
					variation="gray"
					icon={'search'}
				/>
			</Button>
		</div>
	)
}

interface ISearchCourseInputProps {
	styles?: string
}
