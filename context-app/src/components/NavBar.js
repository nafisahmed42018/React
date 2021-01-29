import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContext';
import {ThemeContext} from '../context/ThemeContext'

class NavBar extends Component {

    static contextType = AuthContext;
    render() {

        const { isAuthenticated } = this.context;
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, light, dark } = context;
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
            }}
            </ThemeContext.Consumer>
        )
    
    }
    
}

export default NavBar;
