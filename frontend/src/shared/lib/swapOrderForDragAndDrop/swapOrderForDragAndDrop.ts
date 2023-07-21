export function swapOrderForDragAndDrop<T extends { id?: number; order?: number }>(
	contentData: T[],
	content: T,
	currentContent: T | undefined,
) {
	console.log('step3')
	console.log(currentContent)
	if (currentContent) {
		console.log('step4')
		const changedContent = contentData.map((oldContent) => {
			if (oldContent?.id === content?.id) {
				return { ...oldContent, order: currentContent.order }
			}
			if (oldContent.id === currentContent.id) {
				return { ...oldContent, order: content.order }
			}

			return oldContent
		})
		console.log('step5', changedContent)
	}
}
