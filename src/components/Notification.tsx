import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import { SaveOutlined, WatchLater } from '@material-ui/icons';

const Notification = () => {
    return (
        <>
            <Box paddingY="0.25rem">
                <Typography color="secondary" variant="body1"><span>•</span> SMITH, Adam</Typography>
            </Box>
            <Box paddingY="0.25rem">
                <Typography style={{ display: 'flex' }}>
                    <SaveOutlined style={{ paddingRight: '0.25rem', fill: 'grey' }} />
                        21-Jul-1956
                        <WatchLater style={{ paddingLeft: '1.75rem', paddingRight: '0.25 rem', fill: 'grey' }} />
                        2 mins
                    </Typography>
            </Box>
            <Box paddingTop="0.25rem" paddingBottom="4rem">
                <Typography>
                    Set ut prespiciatis un volupatem accusant totam rem aperiam, totam rem aperiam,
                    </Typography>
            </Box>
            <Divider />
        </>
    )
}

export default Notification
