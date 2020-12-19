import React, { useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles,
    Divider,
    Grid,
    Dialog,
    Slide,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    container: {
        padding: 12,
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

interface IProps {
    item?: number
    parentOpen?: boolean
}

const CardComponent = ({ item, parentOpen }: IProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const CardItem = (
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
                        <Button size="small" className={classes.button} onClick={() => setOpen(!open)}>See details</Button>
                    </CardActions>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                keepMounted
                onClose={() => setOpen(!open)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(!open)} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => setOpen(!open)} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )

    return (
        <>
            {((item || 0) === 0) && (
                <Slide direction="up" in={parentOpen} timeout={(item || 0.5) * 1000}>
                    {CardItem}
                </Slide>
            )}
            {((item || 0) === 1) && (
                <Slide direction="down" in={parentOpen} timeout={(item || 0) * 1000}>
                    {CardItem}
                </Slide>
            )}
            {((item || 0) === 2) && (
                <Slide direction="left" in={parentOpen} timeout={(item || 0) * 1000}>
                    {CardItem}
                </Slide>
            )}
            {((item || 0) === 3) && (
                <Slide direction="right" in={parentOpen} timeout={(item || 0) * 1000}>
                    {CardItem}
                </Slide>
            )}
        </>
    )
}

export default CardComponent