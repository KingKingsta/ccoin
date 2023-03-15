import { ComponentMeta, ComponentStory } from '@storybook/react'
import CreateAccount, { ICreateAccount } from './CreateAccount'
import { mockCreateAccountProps } from './CreateAccount.mocks'

export default {
    title: 'account/CreateAccount',
    component: CreateAccount,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof CreateAccount>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreateAccount> = (args) => (
    <CreateAccount {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCreateAccountProps.base,
} as ICreateAccount
