import React from 'react';
import { Button as MaterialButton, ButtonProps as MUIButtonProps } from '@material-ui/core';

export interface ButtonProps extends MUIButtonProps {
    children: React.ReactNode
    icon?: string
    rounded?: boolean
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const {
        children,
        rounded = false
    } = props;

    return (
        <MaterialButton
            style={{
                borderRadius: rounded ? '100px' : '4px'
            }}
            {...props}
        >
            {children}
        </MaterialButton>
    )
}

export default Button;

// 0300 123 1100