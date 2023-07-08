import { useState } from 'react'

import classes from './LessonFormSteps.module.scss'

import { CreateLessonAboutForm } from 'features/Lesson/CreateLessonAboutForm'
import { CreateLessonAdditionForm } from 'features/Lesson/CreateLessonAdditionForm'
import { CreateLessonContentForm } from 'features/Lesson/CreateLessonContentForm'

import { classnames as cn } from 'shared/lib'
import { Button, Hr, Icon, Step, Tag } from 'shared/ui'

export const LessonFormSteps = ({ styles }: ILessonFormStepsProps) => {
	const [step, setStep] = useState<1 | 2 | 3>(1)

	const formRender = () => {
		switch (step) {
			case 1:
				return <CreateLessonAboutForm />
			case 2:
				return <CreateLessonContentForm />
			case 3:
				return <CreateLessonAdditionForm />
		}
	}
	return (
		<div className={cn(classes.LessonFormSteps, [styles])}>
			<div className={classes.header}>
				<Step
					onClick={() => setStep(1)}
					stepNumber={1}
					format={'first'}
					variation={'primary'}
				>
					Описание
				</Step>
				<Step
					onClick={() => setStep(2)}
					stepNumber={2}
					format={'second'}
					variation={step > 1 ? 'primary' : 'secondary'}
				>
					Контент
				</Step>
				<Step
					onClick={() => setStep(3)}
					stepNumber={3}
					format={'last'}
					variation={step > 2 ? 'primary' : 'secondary'}
				>
					Материалы
				</Step>
			</div>

			<Hr />

			{formRender()}
		</div>
	)
}

interface ILessonFormStepsProps {
	styles?: string
}
