import { BaseSyntheticEvent, ReactNode, useEffect, useState } from 'react'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'

import { createIsValidObject } from '../lib/createIsValidObject/createIsValidObject'
import { IConbineFormConstructor } from '../types/FormConstructor'
import classes from './FormConstructor.module.scss'
import { RenderFormItem } from './RenderFormItem/RenderFormItem'

import { classnames as cn } from 'shared/lib'
import { Button, ErrorText, Htag, List } from 'shared/ui'

export function FormConstructor({ styles, data, onSubmit, button }: IFormConstructorProps) {
	const {
		register,
		handleSubmit,
		control,
		getValues,
		formState: { errors, isDirty, isValid },
	} = useForm({ mode: 'onChange' })

	return (
		<form className={cn(classes.FormConstructor, [styles])}>
			<List
				styles={classes.list}
				variation={'list'}
				items={data}
				renderItem={(formItem: IConbineFormConstructor) => (
					<div
						className={classes.form_item}
						key={formItem.key}
					>
						<div className={classes.form_description}>
							<div>
								{formItem.title && <Htag tag={'small'}>{formItem.title}</Htag>}
								{formItem.description && formItem.type !== 'check-box' && (
									<Htag tag={'very-small'}>{formItem.description}</Htag>
								)}
							</div>
							{errors[formItem.key] && (
								<ErrorText>{String(errors[formItem.key].message)}</ErrorText>
							)}
						</div>

						{
							<RenderFormItem
								getValues={getValues}
								formItem={formItem}
								control={control}
								register={register}
							/>
						}
					</div>
				)}
			/>
			<div
				className={classes.submit}
				onClick={handleSubmit(onSubmit)}
			>
				{button(isValid, isDirty)}{' '}
			</div>
		</form>
	)
}

interface IFormConstructorProps {
	styles?: string
	data: IConbineFormConstructor[]
	onSubmit: (formData: any, event: BaseSyntheticEvent) => void
	button: (isValid: boolean, isDirty: boolean) => ReactNode
}
