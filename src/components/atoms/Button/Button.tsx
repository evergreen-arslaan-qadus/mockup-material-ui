import React from 'react'

enum Size {
    xsmall,
    small,
    medium,
    large,
    xlarge
}

enum Variant {
    icon,
    primay,
    secondary,
    light,
    discreet
}

enum Color {
    default,
    tentative,
    destructive,
    execpt
}

interface IProps {
    children: string
    size?: Size
    icon?: string
    variant?: Variant
    color?: Color
}

const Button = ({ children }: IProps) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default Button
