import { useTranslation } from 'react-i18next'

import { IConbineFormConstructor } from '../../types/FormConstructor'

export const rulesConstructor = ({ rules }: IConbineFormConstructor) => {
	const { t } = useTranslation()

	if (rules) {
		return {
			required: rules.required && { value: true, message: `${t('obyazatelnoe-pole')}` },
			maxLength: rules.maxLength && {
				value: rules.maxLength,
				message: `${t('bolshe ')}` + `${rules.maxLength}` + `${t(' simvolov')}`,
			},
		}
	}
	return {}
}
