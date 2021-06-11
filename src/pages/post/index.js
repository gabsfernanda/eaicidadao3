import React from 'react'

import Container from '../../components/container'
import Header from '../../components/header'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check';
import { grey } from '@material-ui/core/colors';

// const Post = () =>(

//     <>
//     <Header />
//     <Container>
//         <h1>Post</h1>
//     </Container>
//     <Footer />
//     </>
// )

const useStyles = makeStyles((theme) => ({
    root: { 
        background: 'blue',
        height: 'calc(100% - 70px)',
        overflow: 'scroll',
    },
    appBar:{
        background: '#a249d6',
        top: 'auto',
        botom: 0,
        alignItems: 'center',
    },
}))

function Post() {
    const classes = useStyles()
    return (
        <>
            <Header></Header>
            <Container>
                <Box display="flex" className={classes.root}>
                    <Box>Editor</Box>
                    <AppBar position="fixed" color="inherit" className={classes.appBar}>
                        <Toolbar>
                            <Button ><CheckIcon style={{ color: grey[50] }} /></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </>
    )
}

export default Post;