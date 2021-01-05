import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

// import { default as Button, ButtonProps } from './Button';
import { Button, ButtonProps } from '@material-ui/core';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'text'
};

export const Contained = Template.bind({});
Contained.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Click Me',
    color: 'primary',
    variant: 'outlined'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Click Me',
    color: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
    children: 'Click Me',
};

export const Small = Template.bind({});
Small.args = {
    children: 'Click Me',
};