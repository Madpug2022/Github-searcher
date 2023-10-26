
import FilterBar from "../components/FilterBar"
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FilterBar> = {
    title: "FilterBar",
    component: FilterBar,
}
export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        variant: 'white'
    }
}

export const Dark: Story = {
    args: {
        variant: 'black'
    }
}
