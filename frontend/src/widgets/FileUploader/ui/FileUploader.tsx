import classes from './FileUploader.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const FileUploader = ({ styles }: IFileUploaderProps) => {
	return (
		<div className={cn(classes.FileUploader, [styles])}>
			<div className={classes.top_block}>
				<Htag
					tag={'medium'}
					//styles={{ lineHeight: '2' }}
				>
					Обложка курса
				</Htag>
				<Htag
					tag={'small'}
					styles={classes.top_block}
				>
					JPEG до 5 Мб
				</Htag>
			</div>
			<div className={classes.bottom_block}>
				<div className={classes.file_icon}>
					<Icon
						variation={'inverted-secondary'}
						icon={'file'}
						styles={classes.icon_size}
					/>
				</div>
				<Button
					variation="primary"
					styles={classes.button}
					format={'small'}
				>
					Загрузить файл
					<Icon
						variation={'secondary'}
						icon={'save'}
					/>
				</Button>
				<div className={classes.text}>
					<Htag tag={'very-small'}>Или перетащите файл</Htag>
				</div>
			</div>
		</div>
	)
}

interface IFileUploaderProps {
	styles?: string
}
