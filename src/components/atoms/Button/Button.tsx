import React from 'react'
import { Button as MaterialButton, withStyles, WithStyles } from '@material-ui/core';
import { styles } from './Button.style';
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

const Button = ({ children, label, variant, classes }: ButtonProps & WithStyles<typeof styles>): React.ReactElement<ButtonProps> => {
    return (
        <MaterialButton
            classes={classes}
            variant="contained"
            disableRipple>
            {label}
            {children}
        </MaterialButton>
    )
}

export default withStyles(styles)(Button);