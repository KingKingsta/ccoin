import { ComponentMeta, ComponentStory } from '@storybook/react';
import Type, { IType } from './Type';
import { mockTypeProps } from './Type.mocks';

export default {
    title: 'send/Type',
    component: Type,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Type>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Type> = (args) => <Type {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockTypeProps.base,
} as IType;
