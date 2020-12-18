import React, { useState } from 'react'
import { Box, Button, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Card from '../components/Card';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box>
                <Typography variant="h3">
                    Dashboard
                </Typography>
            </Box>
            <Box paddingTop="4rem" paddingBottom="2rem">
                <Typography variant="h5" color="textSecondary">
                    Last Visited Patients
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" padding="1rem">
                <Card parentOpen={true} />
                <Card parentOpen={true} />
                <Card parentOpen={true} />
                <Card parentOpen={true} />
            </Box>
            {open && (
                <Box display="flex" justifyContent="space-between" padding="1rem">
                    {[0, 1, 2, 3].map(item => (
                        <Card key={item} parentOpen={open} item={item} />
                    ))}
                </Box>
            )}
            <Box display="flex" justifyContent="flex-end" paddingTop="1rem">
                <Button
                    onClick={() => setOpen(!open)}
                    variant="contained"
                    color="default"
                    style={{ borderRadius: 25, color: 'white', backgroundColor: '#1c9e29' }}
                    endIcon={<ArrowForward />}
                >
                    {open ? "Hide" : "See"} all patients
                </Button>
            </Box>
        </>
    )
}

export default Dashboard
