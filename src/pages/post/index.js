import React from 'react'

import Container from '../../components/container'
import Header from '../../components/header'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CheckIcon from '@material-ui/icons/Check';
import { grey } from '@material-ui/core/colors';

import './post.css'

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
        // background: 'blue',
        height: 'calc(100% - 20px)',
    },
    appBar:{
        background: '#a249d6',
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
    // textfield:{
    //     margin: theme.spacing(1),
    // },
}))


function Post() {
    const classes = useStyles()

    const [value, setValue] = React.useState(' ');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <Header></Header>
            <Container>
                <Box className={classes.root}>
                    {/* <div className="teste"></div>
                    <div className="teste2"></div>
                     */}
                     <Box mb={2}>
                        <TextField id="title" placeholder="Título" fullWidth /> 
                     </Box>
                     <Box mb={2}>
                     <TextField 
                        margin="theme.spacing(1)"
                        fullWidth 
                        fullHeight
                        noValidate autoComplete="off"
                        id="filled-multiline-flexible"
                        label="Faça sua reclamação aqui"
                        multiline
                        maxLength={4}
                        value={value}
                        onChange={handleChange}
                        variant="filled"
                        />
                     </Box>

                        {/* <TextField id="title" placeholder="Título" fullWidth />  */}

                        {/* <TextField className={classes.textfield} noValidate autoComplete="off"
                        id="filled-multiline-flexible"
                        label="Faça sua reclamação aqui"
                        multiline
                        rowsMax={10}
                        fullWidth
                        fullHeight
                        value={value}
                        onChange={handleChange}
                        variant="filled"
                        /> */}
                </Box>
                <AppBar position="fixed" color="inherit" className={classes.appBar}>
                    <Toolbar>
                        <Button ><CheckIcon style={{ color: grey[50] }} /></Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}

export default Post;