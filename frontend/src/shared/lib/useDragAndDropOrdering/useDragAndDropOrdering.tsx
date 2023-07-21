import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react'

import classes from './useDragAndDropOrdering.module.scss'

export function useDragAndDropOrdering<T>({
	start,
	end,
	leave,
	over,
	drop,
	currentId,
	setCurrentId,
}: IUseDragAndDropOrdering<T>) {
	function startHandler(e: BaseSyntheticEvent, content: T): void {
		console.log('start', e.target.id)
		setCurrentId && setCurrentId(e.target.id)
		start && start(e, content)
	}
	function endHandler(e: BaseSyntheticEvent): void {
		end && end(e)
	}
	function leaveHandler(e: BaseSyntheticEvent): void {
		if (e.target.id === currentId) {
			// e.target.style.backgroundColor = 'var(--background)'
			e.target.classList.remove(classes.primary)
			leave && leave(e)
		}
	}
	function overHandler(e: BaseSyntheticEvent): void {
		e.preventDefault()

		if (e.target.id === currentId) {
			// e.target.style.backgroundColor = 'red'

			e.target.classList.add(classes.primary)
			console.log(e.target.classList)
			over && over(e)
		}
	}

	function dropHandler(e: BaseSyntheticEvent, content: T): void {
		e.preventDefault()

		if (e.target.id === currentId) {
			// e.target.style.backgroundColor = 'var(--background)'
			e.target.classList.remove(classes.primary)
			drop && drop(e, content)
		}

		console.log('changedContent')
	}

	return { startHandler, endHandler, leaveHandler, overHandler, dropHandler }
}

interface IUseDragAndDropOrdering<T> {
	start?: (e: BaseSyntheticEvent, content: T) => void
	end?: (e: BaseSyntheticEvent) => void
	leave?: (e: BaseSyntheticEvent) => void
	over?: (e: BaseSyntheticEvent) => void
	drop?: (e: BaseSyntheticEvent, content: T) => void
	currentId: string | undefined
	setCurrentId: Dispatch<SetStateAction<string | undefined>> | undefined
}
