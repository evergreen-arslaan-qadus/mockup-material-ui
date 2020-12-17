import React from 'react'
import { Box, Button, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Card from '../components/Card';

const Dashboard = () => {
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
            <Box display="flex" justifyContent="space-between">
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
            <Box display="flex" justifyContent="flex-end" paddingTop="1rem">
                <Button
                    variant="contained"
                    color="default"
                    style={{ borderRadius: 25, color: 'white', backgroundColor: '#1c9e29' }}
                    endIcon={<ArrowForward />}
                >
                    See all patients
                </Button>
            </Box>
        </>
    )
}

export default Dashboard
