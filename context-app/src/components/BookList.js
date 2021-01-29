import React,{useState,useEffect,useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import AddBook from './AddBook'

const BookList = () => {
    const [Books,setBooks] = useState([

        { title: "The Last Wish" },
        { title: "Sword of Destiny" },
        { title: "Blood of Elves" }
        
    ]);
    const addBook = (newBook) => {
        setBooks([...Books, { title:newBook }]);
    }

    useEffect(() => {
        //console.log('useEffect hook ran', Books)
    });

    const { isDarkTheme, light, dark } = useContext(ThemeContext);
    const theme = isDarkTheme ? dark : light;

    return(
            

        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {Books.map(book => {
                    return (
                        <li key={book.title} style={{ background: theme.ui }}>{book.title}</li>
                    )
                })}
            </ul>
            <AddBook addBook={ addBook}/>
         </div>

        )
    }

export default BookList;

