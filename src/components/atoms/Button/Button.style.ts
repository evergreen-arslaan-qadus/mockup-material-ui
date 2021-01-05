import { darken, lighten, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { ButtonProps } from './Button';

import colorStyleGenerator from '../../../helpers/styleGenerator'

const color = (props: ButtonProps, theme: Theme) => {
    if (props.variant === 'primary') {
        colorStyleGenerator.root = {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
        }
        colorStyleGenerator.active = {
            backgroundColor: darken(theme.palette.primary.main, 0.2)
        }
        colorStyleGenerator.focus = {
            borderColor: darken(theme.palette.primary.main, 0.2),
            border: '2px solid',
        }
        colorStyleGenerator.hover = {
            backgroundColor: lighten(theme.palette.primary.main, 0.2)
        }
    }

    if (props.variant === 'secondary') {
        colorStyleGenerator.root = {
            border: '2px solid',
            backgroundColor: 'white',
            color: theme.palette.primary.main,
        }
        colorStyleGenerator.active = {
            border: '2px solid',
            borderColor: theme.palette.grey[400],
        }

        colorStyleGenerator.focus = {
            border: '2px solid',
            borderColor: theme.palette.grey[200],
        }

        colorStyleGenerator.hover = {
            backgroundColor: darken(theme.palette.grey[50], 0.2),
        }
    }

    return colorStyleGenerator;
}

export const useStyles = (props: ButtonProps) => {
    const theme = useTheme();
    const colors = color(props, theme);

    const styles = makeStyles(theme => ({
        root: {
            // base styles for the actual button live here
            ...colors.root,
            padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
            border: '2px solid',
            fontWeight: 'bolder',
            borderRadius: 100,

            '&:hover': {
                ...colors.hover,
            },

            '&:active': {
                ...colors.active
            },

            '&:focus': {
                ...colors.focus
            },
        },
    }));

    return styles(props);
}