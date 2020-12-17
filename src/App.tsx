import React from 'react';
import { Box } from '@material-ui/core';
import Card from './components/Card';

const App = () => {

    return (
        <Box display="flex" justifyContent="space-between" padding="3rem">
            <Box>
                <Card />
            </Box>
            <Box>
                <Card />
            </Box>
            <Box>
                <Card />
            </Box>
            <Box>
                <Card />
            </Box>
        </Box>
    );
}

export default App;
