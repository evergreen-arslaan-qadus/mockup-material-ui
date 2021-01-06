import { green } from "@material-ui/core/colors";
import { Overrides } from "@material-ui/core/styles/overrides";

export const textFieldStyles: Overrides = {
    MuiTextField: {
        root: {
            fontWeight: 'bolder',
            color: green[500]
        },
    }
};