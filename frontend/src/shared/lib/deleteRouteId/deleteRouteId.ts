export const deleteRouteId = (route: string) => {
	const routeArray = route.split('/')
	routeArray.pop()
	const newRoute: string = routeArray.join('/') + '/'
	return newRoute
}
