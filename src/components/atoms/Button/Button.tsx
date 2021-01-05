import React from 'react';
import { Button as MaterialButton, ButtonProps as MUIButtonProps } from '@material-ui/core';
import { useStyles } from './Button.style';

export interface ButtonProps extends MUIButtonProps {
    children: React.ReactNode
    icon?: string
    label?: string
    rightIcon?: React.ReactElement
    leftIcon?: React.ReactElement
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const { children, label, leftIcon, rightIcon, color = "primary" } = props;
    const classes = useStyles(props);

    return (
        <MaterialButton
            classes={classes}
            color={color}
            disableRipple
        >
            {leftIcon}
            {label}
            {children}
            {rightIcon}
        </MaterialButton>
    )
}

export default Button;
