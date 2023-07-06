import { useTranslation } from 'react-i18next'

import classes from './FileUploader.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Htag, Icon } from 'shared/ui'

export const FileUploader = ({ styles }: IFileUploaderProps) => {
	const { t } = useTranslation('course')
	return (
		<div className={cn(classes.FileUploader, [styles])}>
			<div className={classes.top_block}>
				<Htag tag={'small'}>{t('oblozhka-kursa')}</Htag>
				<Htag
					tag={'very-small'}
					styles={classes.top_block}
				>
					{t('jpeg-do-5-mb')}
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
					{t('zagruzit-fail')}
					<Icon
						variation={'secondary'}
						icon={'save'}
					/>
				</Button>
				<div className={classes.text}>
					<Htag tag={'very-small'}>{t('ili-peretashite-fail')}</Htag>
				</div>
			</div>
		</div>
	)
}

interface IFileUploaderProps {
	styles?: string
}
