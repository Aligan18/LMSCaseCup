import classes from './CreateTaskPage.module.scss'

import { classnames as cn } from 'shared/lib'

export const CreateTaskPage = ({ styles }: ICreateTaskPageProps) => {
	return <div className={cn(classes.CreateTaskPage, [styles])}></div>
}
export default CreateTaskPage

interface ICreateTaskPageProps {
	styles?: string
}
