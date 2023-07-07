import { IConbineFormConstructor } from '../../types/FormConstructor'

export const rulesConstructor = ({ rules }: IConbineFormConstructor) => {
	if (rules) {
		return {
			required: rules.required && { value: true, message: 'Обязательное поле' },
			maxLength: rules.maxLength && {
				value: rules.maxLength,
				message: `Больше ${rules.maxLength} символов`,
			},
		}
	}
	return {}
}
