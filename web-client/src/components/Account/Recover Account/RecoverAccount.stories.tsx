import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecoverAccount, { IRecoverAccount } from './RecoverAccount';
import { mockRecoverAccountProps } from './RecoverAccount.mocks';

export default {
    title: 'account/RecoverAccount',
    component: RecoverAccount,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof RecoverAccount>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RecoverAccount> = (args) => (
    <RecoverAccount {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockRecoverAccountProps.base,
} as IRecoverAccount;
