import { ComponentMeta, ComponentStory } from '@storybook/react';
import Wallet, { IWallet } from './Wallet';
import { mockWalletProps } from './Wallet.mocks';

export default {
    title: 'wallet/Wallet',
    component: Wallet,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Wallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wallet> = (args) => <Wallet {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockWalletProps.base,
    // ...mockWalletProps.ethereum,
    // ...mockWalletProps.bitcoin,
    // ...mockWalletProps.pax_gold,
    // ...mockWalletProps.bnb,
    // ...mockWalletProps.polygon,
} as IWallet;
