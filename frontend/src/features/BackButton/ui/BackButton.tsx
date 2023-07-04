import classes from './BackButton.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'

export const BackButton = ({ styles }: IBackButtonProps) => {
	return (
		<div className={cn(classes.BackButton, [styles])}>
			<Button
				variation="primary"
				styles={classes.button}
				format={'small'}
			>
				<Icon
					variation={'secondary'}
					icon={'left'}
				/>
				Назад
			</Button>
		</div>
	)
}

interface IBackButtonProps {
	styles?: string
}
