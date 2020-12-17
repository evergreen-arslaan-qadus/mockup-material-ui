import React from 'react'
import { Box, Divider, Paper, Typography } from '@material-ui/core'
import { Save, SaveOutlined, WatchLater } from '@material-ui/icons';
import Notification from './Notification';

const InfoPanel = () => {
    return (
        <Paper elevation={1}>
            <Box height="100%" paddingLeft="2rem">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </Box>
        </Paper>
    )
}

export default InfoPanel
