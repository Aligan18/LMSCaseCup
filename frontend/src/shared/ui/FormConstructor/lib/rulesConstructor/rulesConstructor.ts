import { FieldValues, RegisterOptions } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { IRegisterRules } from '../../types/FormConstructor'

export const rulesConstructor = (
	rules: IRegisterRules | undefined,
	watch: any,
):
	| Omit<
			RegisterOptions<FieldValues, string>,
			'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	  >
	| undefined => {
	const { t } = useTranslation()
	const createPattern = () => {
		switch (rules?.pattern) {
			case 'email':
				return {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: 'Не верный Email адрес',
				}
		}
	}

	if (rules) {
		return {
			required: rules.required && { value: true, message: `${t('obyazatelnoe-pole')}` },
			maxLength: rules.maxLength && {
				value: rules.maxLength,
				message: `${t('bolshe ')}` + `${rules.maxLength}` + `${t(' simvolov')}`,
			},
			minLength: rules.minLength && {
				value: rules.minLength,
				message: `Меньше` + `${rules.minLength}` + `${t(' simvolov')}`,
			},
			pattern: rules.pattern && createPattern(),
			validate: rules.validate
				? (val: string) => {
						if (watch(rules.validate) !== val) {
							return 'Поле должно совподать с полем ' + rules.validate
						}
						return undefined
				  }
				: undefined,
		}
	}
	return {}
}
