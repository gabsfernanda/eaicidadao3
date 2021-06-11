import React from 'react'
import './footer.css'
import { purple } from '@material-ui/core/colors';

import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Footer = () => (
    <footer className="app-footer">
        <div className="buttons">
            <Link to = "/feed"> <HomeIcon style={{ color: purple[600] }} /></Link> 
            <Link to = "/post"> <AddCircleOutlineIcon style={{ color: purple[600] }} /> </Link> 
            <Link to = "/perfil"> <FaceIcon style={{ color: purple[600] }} /> </Link>
        </div>
    </footer>
)

export default Footer