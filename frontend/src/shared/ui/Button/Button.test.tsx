import { render, screen } from '@testing-library/react'

import { Button } from 'shared/ui'

describe('classnames', () => {
	test('with only first params', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})
