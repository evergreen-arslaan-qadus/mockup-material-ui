import React from 'react';
import { Box } from '@material-ui/core';
import InfoPanel from './components/InfoPanel';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box paddingX="4rem" paddingY="2rem" display="flex" flexDirection="column" minWidth="70vw">
                <Dashboard />
            </Box>
            <InfoPanel />
        </Box>
    );
}

export default App;
