import React from 'react'
import { Button as MaterialButton } from '@material-ui/core';
export interface ButtonProps {
    children: React.ReactNode
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
    icon?: string
    variant?: 'icon' | 'primay' | 'secondary' | 'light' | 'discree'
    color?: 'default' | 'tentative' | 'destructive' | 'execpt'
    label: string
    rightIcon?: React.ReactElement
    leftIcon?: React.ReactElement
}

export const Button = ({ children, label, variant, }: ButtonProps): React.ReactElement<ButtonProps> => {
    return (
        <MaterialButton variant="contained">
            {label}
            {children}
        </MaterialButton>
    )
}
