import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class ThemeToggle extends Component{
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme,toggleTheme} = context;
                return (
                    <button onClick={toggleTheme}>{isDarkTheme ? 'Dark':'White'}</button>
                )
            }}
            </ThemeContext.Consumer>
        )
        
    }
}
export default ThemeToggle;