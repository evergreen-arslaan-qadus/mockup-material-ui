import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { useStyles } from './Button.style';

export interface ButtonProps {
    children: React.ReactNode
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
    icon?: string
    variant?: "primary" | "secondary" | "default"
    color?: 'default' | 'tentative' | 'destructive' | 'execpt'
    label: string
    rightIcon?: React.ReactElement
    leftIcon?: React.ReactElement
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const { children, label, leftIcon, rightIcon } = props;
    const classes = useStyles(props);

    return (
        <MaterialButton classes={classes} disableRipple>
            {leftIcon}
            {label}
            {children}
            {rightIcon}
        </MaterialButton>
    )
}

export default Button;
