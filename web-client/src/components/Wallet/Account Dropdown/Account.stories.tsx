import { ComponentMeta, ComponentStory } from '@storybook/react';
import Account, { IAccount } from './Account';

export default {
    title: 'wallet/Account',
    component: Account,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Account>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Account> = (args) => (
    <Account {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {} as IAccount;
