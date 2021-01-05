import React from 'react';
import { Button as MaterialButton, ButtonProps as MUIButtonProps } from '@material-ui/core';

export interface ButtonProps extends MUIButtonProps {
    children: React.ReactNode
    icon?: string
    rounded?: boolean
    variant?: "contained" | "text" | "outlined"

}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const {
        children,
        rounded = false,
        variant = "contained"
    } = props;

    return (
        <MaterialButton
            style={{
                borderRadius: rounded ? '100px' : '4px'
            }}
            variant={variant}
            {...props}
        >
            {children}
        </MaterialButton>
    )
}

export default Button;

// 0300 123 1100