import classes from './DownloadingFileButton.module.scss'

import { IAdditionData } from 'entities/Lesson/types'

import { Button, Icon } from 'shared/ui'

export const DownloadingFileButton = ({ styles, data }: IDownloadingFileButtonProps) => {
	return (
		<Button
			format={'small'}
			styles={[styles, classes.button].join(' ')}
		>
			{data.title}
			<Icon
				variation={'secondary'}
				icon={'file'}
			/>
		</Button>
	)
}

interface IDownloadingFileButtonProps {
	styles?: string
	data: IAdditionData
}
