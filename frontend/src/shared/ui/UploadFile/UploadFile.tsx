import {
	ChangeEvent,
	DetailedHTMLProps,
	Dispatch,
	ForwardedRef,
	HtmlHTMLAttributes,
	SetStateAction,
	forwardRef,
} from 'react'

import classes from './UploadFile.module.scss'

import { classnames as cn } from 'shared/lib'
import { Button, Icon } from 'shared/ui'

export const UploadFile = forwardRef(
	({ styles, ...props }: IUploadFileProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<Button
				styles={classes.button}
				disabled={true}
			>
				<label className={cn(classes.UploadFile, [styles])}>
					<input
						ref={ref}
						type="file"
						className={classes.input}
						{...props}
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

interface IUploadFileProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	styles?: string
}
