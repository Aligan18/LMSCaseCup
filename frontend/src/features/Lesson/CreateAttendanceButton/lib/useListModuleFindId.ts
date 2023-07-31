import { useSelector } from 'react-redux'

import { getAllModuleData } from 'entities/Module/ModuleData'
import { IListModule } from 'entities/Module/types'

export const useListModuleFindId = (moduleIndex: number, listModulesId: number): IOutput | undefined => {
	const modules = useSelector(getAllModuleData)
	const currentIndex = modules[moduleIndex]?.list_modules.findIndex((list) => list.id === listModulesId)

	if (currentIndex !== -1) {
		if (currentIndex === modules[moduleIndex]?.list_modules.length - 1) {
			const next = modules[moduleIndex + 1]?.list_modules[0]
			const previous = modules[moduleIndex]?.list_modules[currentIndex - 1]
			return { next, previous }
		} else {
			console.log('DOWn')
			console.log(moduleIndex)
			const next = modules[moduleIndex]?.list_modules[currentIndex + 1]
			const previous = modules[moduleIndex]?.list_modules[currentIndex - 1]
			return { next, previous }
		}
	}
}

interface IOutput {
	next: IListModule
	previous: IListModule
}
