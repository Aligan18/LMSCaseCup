import { useTranslation } from 'react-i18next'

import classes from './CreateAnswerPage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateTaskAnswerForm } from 'features/Task/CreateTaskAnswerForm'

import { classnames as cn } from 'shared/lib'
import { Button, Header, Htag, Icon, TextInput, UploadFile } from 'shared/ui'

export const CreateAnswerPage = ({ styles }: ICreateAnswerPageProps) => {
	const { t } = useTranslation('course')

	const data = [
		{
			title: 'Сделать корреляционный анализ',
			description:
				'Выполните работу, дедлайн до 01.10.2020. 1. Установите, имеется ли корреляционная связь между x и y; определите коэффициент корреляции r: 2. Определите тесноту корреляционной связи. 3. Составьте уравнение регрессии и найдите ожидаемое значение для y при х=18. Решение: Построим график, отложив вдоль оси абсцисс Х величину интрасклерального давления х , а вдоль оси ординат Y – величину внутриглазного давления y.Тогда каждой паре значений х и у на графике будет соответствовать определѐнная точка. По характеру расположения точек можно предположить существование линейной корреляционной связи между х и у',
		},
	]

	return (
		<div className={cn(classes.CreateAnswerPage, [styles])}>
			<BackButton />
			<div className={classes.main}>
				<Header
					title={`${data[0].title}`}
					buttons={
						<Button
							variation="primary"
							styles={classes.button}
							format={'small'}
						>
							{t('otpravit-reshenie')}
							<Icon
								icon={'done'}
								variation={'white'}
							></Icon>
						</Button>
					}
				/>
				<div className={classes.wrapper}>
					<Htag tag={'small'}>{data[0].description}</Htag>
					<Header
						title={`${t('vash-otvet')}`}
						styles={classes.head}
					/>
					<div className={classes.form}>
						<CreateTaskAnswerForm />
					</div>
				</div>
			</div>
		</div>
	)
}
export default CreateAnswerPage

interface ICreateAnswerPageProps {
	styles?: string
}
