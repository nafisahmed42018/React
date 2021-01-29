import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import {ThemeContext} from '../context/ThemeContext'

const NavBar = () => {
    
    const { isDarkTheme, dark, light } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    const theme = isDarkTheme ? dark : light;

    return (
        <nav style={{ background: theme.ui, color: theme.syntax, }}>
            <h1>Context & Hooks</h1>
            <h3>{ isAuthenticated? 'Logged In':'Logged Out' }</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    )

}

export default NavBar;

