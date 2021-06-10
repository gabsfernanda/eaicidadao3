import React from 'react'
import './footer.css'

import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Footer = () => (
    <footer className="app-footer">
        <div className="buttons">
            <Link to = "/feed"> <HomeIcon /></Link> 
            <Link to = "/post"> <AddCircleOutlineIcon/> </Link> 
            <Link to = "/perfil"> <FaceIcon/> </Link>
        </div>
    </footer>
)

export default Footer