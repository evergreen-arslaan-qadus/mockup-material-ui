import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles,
    Divider,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    container: {
        padding: 12,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        padding: '12px 0px'
    },
    space: {
        margin: '12px 0px'
    },
    cardContentItem: {
        padding: '8px 0px',
    },
    button: {
        color: 'green'
    }
});

const CardComponent = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            WILLIAMS, <br /> Jonatan Simson
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            NHS 123 567 766
                        </Typography>
                        <Divider className={classes.space} />
                        <div className={classes.cardContentItem}>
                            <Typography variant="h6" color="textSecondary" >
                                GENDER
                            </Typography>
                            <Typography variant="h6" component="h6">
                                Male
                            </Typography>
                        </div>
                        <div className={classes.cardContentItem}>
                            <Typography variant="h6" color="textSecondary">
                                Born
                            </Typography>
                            <Typography variant="h6" component="h6">
                                14-Jul-1956 (39y)
                            </Typography>
                        </div>
                        <Divider className={classes.space} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.button}>See details</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CardComponent
