import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

    const { isDarkTheme,toggleTheme} = useContext(ThemeContext);
    
    return (           
        <button onClick={toggleTheme}>{isDarkTheme ? 'Dark' : 'White'}</button>       
    )
    

        
}
export default ThemeToggle;