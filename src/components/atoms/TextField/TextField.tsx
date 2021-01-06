import React from 'react';
import { TextField as MaterialTextField, TextFieldProps as MUITextFieldProps } from '@material-ui/core';

export interface TextFieldProps extends MUITextFieldProps {
    // children: React.ReactNode
    // icon?: string
    variant?: "outlined" | "filled" | "standard"
}

const TextField = (props: TextFieldProps): React.ReactElement<TextFieldProps> => {
    const {
        variant = "outlined"
    } = props;

    return (
        <MaterialTextField

            variant={variant}
            {...props}
        >
            {/* {children} */}
        </MaterialTextField>
    )
}

export default TextField;

// 0300 123 1100