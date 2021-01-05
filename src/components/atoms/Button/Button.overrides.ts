import { green, grey } from "@material-ui/core/colors";
import { Overrides } from "@material-ui/core/styles/overrides";

export const buttonStyles: Overrides = {
    MuiButton: {
        root: {
            textTransform: 'capitalize',
            fontWeight: 'bolder',
            color: green[500]
        },
        textPrimary: {
            "&:hover": {
                backgroundColor: green[50]
            },
            "&:active": {
                backgroundColor: green[100],
            }
        },
        outlinedPrimary: {
            "&:hover": {
                backgroundColor: grey[200]
            },
            "&:active": {
                backgroundColor: grey[300],
                border: '1px solid',
                borderColor: green[500]
            }
        },
        containedPrimary: {
            color: 'white',
            backgroundColor: green[500],
            "&:hover": {
                backgroundColor: green[300]
            },
            "&:active": {
                backgroundColor: green[700],
            }
        },
    }
};