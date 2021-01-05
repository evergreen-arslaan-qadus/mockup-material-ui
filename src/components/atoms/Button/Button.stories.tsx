import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Evergreen/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'text'
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'contained'
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'outlined'
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
    children: 'Click Me',
    color: 'secondary',
    variant: 'text'
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
    children: 'Click Me',
    color: 'secondary',
    variant: 'contained'
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
    children: 'Click Me',
    color: 'secondary',
    variant: 'outlined'
};

export const RoundedPrimary = Template.bind({});
RoundedPrimary.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'contained',
    rounded: true
};
