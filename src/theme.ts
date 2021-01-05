import { createMuiTheme } from "@material-ui/core";
import { buttonStyles } from './components/atoms/Button/Button.overrides';

export const theme = createMuiTheme({
    overrides: {
        ...buttonStyles,
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

// export const theme = createMuiTheme({
//     palette: {
//         greens: {
//             100: '#39b54a',
//             75: '#6bc878',
//             50: '#9cdaa4',
//             25: '#cdecd2',
//             10: '#ebf7ec',
//             dark: '#1c5a24',
//             pressed: '#54925c',
//         },
//         yellows: {
//             100: "#ffc805",
//             75: "#ffd644",
//             50: "#ffe382",
//             25: "#fff1c0",
//             10: "#fff9e6",
//             dark: '#8a6c00',
//             pressed: '#e7b60a'
//         },
//         rubys: {
//             100: "#d8338b",
//             75: "#e474b1",
//             50: "#eca4cb",
//             25: "#f5d3e5",
//             10: "#fae9f3",
//             pressed: '#c12d7e'
//         },
//         greys: {
//             100: "#706f6f",
//             75: "#939393",
//             50: "#b7b7b7",
//             25: "#dbdbdb",
//             10: "#f0f0f0",
//             dark: "#f7f7f7",
//         },
//     },
// });
