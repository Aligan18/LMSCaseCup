import { useForm } from 'react-hook-form'

import classes from './CreateLessonForm.module.scss'

import { ICreateLessonData } from 'entities/Lesson'

import { classnames as cn } from 'shared/lib'
import { FormConstructor } from 'shared/ui'

export const CreateLessonForm = ({ styles }: ICreateLessonFormProps) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ICreateLessonData>()
	return (
		<div className={cn(classes.CreateLessonForm, [styles])}>{/* <FormConstructor  /> */}</div>
	)
}

interface ICreateLessonFormProps {
	styles?: string
}
