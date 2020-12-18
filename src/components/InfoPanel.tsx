import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import Notification from './Notification';

const InfoPanel = () => {
    const Notifications = [...Array(15)].map(num => (<Notification key={num} />));
    return (
        <Paper elevation={1}>
            <Box height="100%" paddingLeft="2rem">
                <Box paddingTop="2rem" paddingBottom="2rem">
                    <Typography variant="subtitle1">Recent recieved notifications</Typography>
                </Box>
                {Notifications}
            </Box>
        </Paper>
    )
}

export default InfoPanel
