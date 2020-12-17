import { Box, Button, makeStyles } from '@material-ui/core'
import { DashboardOutlined, PersonOutline, PeopleOutline } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    button: {
        height: 150
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
                    <Box display="flex" flexDirection="column" height="400px" >
                        <Button classes={{ root: classes.button, label: classes.label }} style={{ color: '#fff' }}>
                            <DashboardOutlined fontSize="large" />
                            Dashboard
                        </Button>
                        <Button classes={{ root: classes.button, label: classes.label }} style={{ color: '#fff' }}>
                            <PersonOutline fontSize="large" />
                            Person
                        </Button>
                        <Button classes={{ root: classes.button, label: classes.label }} style={{ color: '#fff' }}>
                            <PeopleOutline fontSize="large" />
                            Patients
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar
