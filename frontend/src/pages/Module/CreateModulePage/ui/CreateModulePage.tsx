import classes from './CreateModulePage.module.scss'

import { BackButton } from 'features/BackButton'
import { CreateModuleForm } from 'features/Module/CreateModuleForm'
import { EditModuleList } from 'features/Module/EditModuleList'

import { classnames as cn } from 'shared/lib'

const CreateModulePage = ({ styles }: ICreateModulePageProps) => {
	return (
		<div className={cn(classes.CreateModulePage, [styles])}>
			<BackButton />
			<div className={classes.course_card}>
				<CreateModuleForm />
			</div>
			<div>
				<EditModuleList />
			</div>
		</div>
	)
}

export default CreateModulePage
interface ICreateModulePageProps {
	styles?: string
}
