import { useTranslation } from 'react-i18next'

import classes from './LanguageCard.module.scss'

import { classnames as cn } from 'shared/lib'
import { ListItem } from 'shared/ui'

export const LanguageCard = ({ styles }: ILanguageCardProps) => {
	const { t } = useTranslation()
	return (
		<div className={cn(classes.LanguageCard, [styles])}>
			<ListItem
				hover={'hover_inverted-secondary'}
				variation={'clear'}
				styles={classes.butn}
			>
				{t('russkii')}
			</ListItem>
			<ListItem
				hover={'hover_inverted-secondary'}
				variation={'clear'}
				styles={classes.butn}
			>
				{t('kazakhskii')}
			</ListItem>
			<ListItem
				hover={'hover_inverted-secondary'}
				variation={'clear'}
				styles={classes.butn}
			>
				{t('angliiskii')}
			</ListItem>
		</div>
	)
}

interface ILanguageCardProps {
	styles?: string
}
