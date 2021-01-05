import { Box, makeStyles, Button as MuiButton } from '@material-ui/core'
import { DashboardOutlined, PersonOutline, PeopleOutline } from '@material-ui/icons'
import React from 'react'
// import { Button } from './atoms'

const useStyles = makeStyles({
    button: {
        height: 150,
        color: 'white',
        border: '0px solid !imporantant'
    },
    label: {
        flexDirection: 'column'
    },
    icon: {
        fontSize: '100px !important',
        marginBottom: 12
    }
})

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box bgcolor="#1c9e29" display="flex" flexDirection="column">
            <Box height="100vh" display="flex" flexDirection="column">
                <Box padding="1.5rem">
                    <img src="/logo.svg" alt="logo" width="65px" />
                </Box>
                <Box height="100%" display="flex" alignItems="center">
                    <Box display="flex" flexDirection="column" height="400px" flexGrow={1}>
                        <MuiButton variant="text" color="primary" classes={{ root: classes.button, label: classes.label }}>
                            <DashboardOutlined fontSize="large" />
                            Dashboard
                        </MuiButton>
                        <MuiButton variant="outlined" color="primary" classes={{ root: classes.button, label: classes.label }}>
                            <PersonOutline fontSize="large" />
                            Person
                        </MuiButton>
                        <MuiButton variant="contained" color="primary" classes={{ root: classes.button, label: classes.label }}>
                            <PeopleOutline fontSize="large" />
                            Patients
                        </MuiButton>
                        {/* <Button rounded={false} classes={{ root: classes.button, label: classes.label }}>
                            <DashboardOutlined fontSize="large" />
                            Dashboard
                        </Button>
                        <Button rounded={false} classes={{ root: classes.button, label: classes.label }}>
                            <PersonOutline fontSize="large" />
                            Person
                        </Button>
                        <Button rounded={false} classes={{ root: classes.button, label: classes.label }}>
                            <PeopleOutline fontSize="large" />
                            Patients
                        </Button> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar
