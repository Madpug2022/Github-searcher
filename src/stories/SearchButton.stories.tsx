import { Meta, StoryObj } from '@storybook/react'
import SearchButton from "../components/SearchButton"

const meta: Meta<typeof SearchButton> = {
    title: "SearchButton",
    component: SearchButton,
}
export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        variant: 'default'
    }
}

export const Dark: Story = {
    args: {
        variant: 'black'
    }
}
export const White: Story = {
    args: {
        variant: 'white'
    }
}
