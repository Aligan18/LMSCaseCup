/* eslint-disable i18next/no-literal-string */
import classes from './LoadingPage.module.scss'

import { classnames as cn } from 'shared/lib'
import { Loader } from 'shared/ui'

export const LoadingPage = ({ style }: ILoadingPageProps) => {
	return (
		<div className={cn(classes.LoadingPage, [style])}>
			<h1>Loading</h1>
			<Loader
				width={20}
				height={20}
			/>
		</div>
	)
}

interface ILoadingPageProps {
	style?: string
}
