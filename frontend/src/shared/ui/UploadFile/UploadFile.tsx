import { ChangeEvent, Dispatch, ForwardedRef, SetStateAction, forwardRef } from 'react'

import classes from './UploadFile.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'

export const UploadFile = forwardRef(
	(
		{ styles, setFile, disabled = false, ...props }: IUploadFileProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const handleAddBanner = (event: ChangeEvent<HTMLInputElement>) => {
			event.preventDefault()
			if (event.target.files) {
				setFile(event.target.files[0])
			}
		}
		return (
			<Button
				styles={classes.button}
				disabled={true}
			>
				<label className={cn(classes.UploadFile, [styles])}>
					<input
						ref={ref}
						disabled={disabled}
						type="file"
						className={classes.input}
						{...props}
						onChange={
							disabled
								? () => {
										;('')
								  }
								: handleAddBanner
						}
					/>
					Прикрепить файл
					<Icon
						variation={'white'}
						icon={'save'}
					/>
				</label>
			</Button>
		)
	},
)

interface IUploadFileProps {
	styles?: string
	setFile: Dispatch<SetStateAction<File>>

	disabled?: boolean
}
