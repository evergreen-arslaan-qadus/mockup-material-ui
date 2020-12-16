import React from 'react';
import { Grid } from '@material-ui/core';
import Card from './components/Card';

const App = () => {

    return (
        <Grid container>
            <Grid item md={4}>
                <Card />
            </Grid>
        </Grid>
    );
}

export default App;
