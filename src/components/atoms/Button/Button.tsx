import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core';
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

const useStyles = makeStyles(theme => {
    return {
        root: {
            background: theme.palette.greens[100],
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
            textTransform: 'capitalize',
        },
    }
});

export const Button = ({ children, label, variant }: ButtonProps): React.ReactElement<ButtonProps> => {
    const classes = useStyles();

    return (
        <MaterialButton
            classes={classes}
            variant="contained"
            color="primary"
            disableRipple>
            {label}
            {children}
        </MaterialButton>
    )
}
