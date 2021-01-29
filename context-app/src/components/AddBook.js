import React, { useState } from 'react';

const AddBook = ({addBook}) => {
    const [newBook, setNewBook] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(newBook);
        setNewBook('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Book Name:</label>
            <input type="text" value={newBook} required onChange={ (e)=>{setNewBook(e.target.value)}}/>
            <input type="submit" value="add book" />
        </form>
    )
}
export default AddBook;
