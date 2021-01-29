import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [Books, setBooks] = useState([
        { title: "The Last Wish" },
        { title: "Sword of Destiny" },
        { title: "Blood of Elves" }
    ]);

    return (
        <BookContext.Provider value={{ Books }}>
            {props.children}
        </BookContext.Provider>
    )

}
export default BookContextProvider;
