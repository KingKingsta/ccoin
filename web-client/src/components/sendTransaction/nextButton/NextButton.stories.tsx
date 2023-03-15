import { ComponentMeta, ComponentStory } from '@storybook/react';
import NextButton, { INextButton } from './NextButton';
import { mockNextButtonProps } from './NextButton.mocks';

export default {
    title: 'send/NextButton',
    component: NextButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof NextButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NextButton> = (args) => (
    <NextButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockNextButtonProps.base,
} as INextButton;
