import { ReactNode } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { IConbineFormConstructor } from '../types/FormConstructor'
import classes from './FormConstructor.module.scss'
import { RenderFormItem } from './RenderFormItem/RenderFormItem'

import { classnames as cn } from 'shared/lib'
import { Button, ErrorText, Htag, List } from 'shared/ui'

export function FormConstructor<T extends FieldValues>({
	styles,
	data,
	onSubmit,
	button,
	disabled,
}: IFormConstructorProps<T>) {
	const {
		register,
		handleSubmit,
		control,
		getValues,
		watch,
		formState: { errors },
	} = useForm<T>({ mode: 'onChange' })

	return (
		<form className={cn(classes.FormConstructor, [styles])}>
			<List
				styles={classes.list}
				variation={'list'}
				items={data}
				renderItem={(formItem: IConbineFormConstructor<T>) => (
					<div
						className={classes.form_item}
						key={String(formItem.key)}
					>
						<div className={classes.form_description}>
							<div>
								{formItem.title && <Htag tag={'small'}>{formItem.title}</Htag>}
								{formItem.description && formItem.type !== 'check-box' && (
									<Htag tag={'very-small'}>{formItem.description}</Htag>
								)}
							</div>
							{errors[formItem.key] && (
								<ErrorText>{String(errors[formItem.key]?.message)}</ErrorText>
							)}
						</div>

						{
							<RenderFormItem<T>
								watch={watch}
								getValues={getValues}
								formItem={formItem}
								control={control}
								register={register}
							/>
						}
					</div>
				)}
			/>

			<div className={classes.submit_wrapper}>
				{
					<div
						className={classes.submit}
						// eslint-disable-next-line @typescript-eslint/no-empty-function
						onClick={!disabled ? handleSubmit(onSubmit) : () => {}}
					></div>
				}

				<Button styles={classes.button}>{button}</Button>
			</div>
		</form>
	)
}

interface IFormConstructorProps<T extends FieldValues> {
	styles?: string
	data: IConbineFormConstructor<T>[]
	onSubmit: SubmitHandler<T>
	button: string | ReactNode
	disabled?: boolean
}
