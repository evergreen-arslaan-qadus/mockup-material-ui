import { createMuiTheme } from "@material-ui/core";
import { buttonStyles } from './components/atoms/Button/Button.overrides';
import { textFieldStyles } from './components/atoms/TextField/TextField.overrides';

export const theme = createMuiTheme({
    overrides: {
        ...buttonStyles,
        ...textFieldStyles
    },
    props: {
        MuiButton: {
            disableElevation: true,
        },
        MuiButtonBase: {
            disableRipple: true,
        }
    },
    palette: {
        primary: {
            main: '#39b54a',
            A700: '#6bc878',
            A400: '#9cdaa4',
            A200: '#cdecd2',
            A100: '#ebf7ec',
            dark: '#1c5a24',
            light: '#54925c',
            contrastText: '#fff',
        },
        secondary: {
            main: "#d8338b",
            A700: "#e474b1",
            A400: "#eca4cb",
            A200: "#f5d3e5",
            A100: "#fae9f3",
            contrastText: '#c12d7e',
        }
    },
});
