import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from './TextField';

export default {
    title: 'Evergreen/TextField',
    component: TextField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    variant: 'standard'
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined'
};

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled'
};
