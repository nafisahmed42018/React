import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class BookList extends Component{

    render() {
       
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, light, dark } = context;
                const theme = isDarkTheme ? dark : light;
                return (
                    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                        <ul>
                            <li style={{ background: theme.ui }}>The Last Wish</li>
                            <li style={{ background: theme.ui }}>Sword of Destiny</li>
                            <li style={{ background: theme.ui }}>Blood of Elves</li>
                        </ul>        
                     </div>
                ) 
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;