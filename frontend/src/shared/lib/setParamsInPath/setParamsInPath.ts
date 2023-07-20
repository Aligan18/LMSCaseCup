export const setParamsInPath = (route: string, params: Record<string, string>) => {
	return Object.keys(params).reduce((path, key) => path?.replace(':' + key, params[key]), route)
}
