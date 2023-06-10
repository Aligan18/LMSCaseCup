import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: { children: 'TEST' },
}

export const Secondary: Story = {
	args: { children: 'TEST' },
}
