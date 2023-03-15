import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddAccount, { IAddAccount } from './Add-Account';
import { mockAddAccountProps } from './Add-Account.mocks';

export default {
    title: 'wallet/AddAccount',
    component: AddAccount,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AddAccount>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddAccount> = (args) => (
    <AddAccount {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAddAccountProps.base,
} as IAddAccount;
