import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
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
});

export { styles };