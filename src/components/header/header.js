import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => (
    <header className="app-header">
        <div className="app-header__logo" >
            <h2>E ai Cidadao</h2>
        </div>
        <div>
            <Link to = "/feed"><MenuIcon /></Link>
        </div>
    </header>
)

export default Header