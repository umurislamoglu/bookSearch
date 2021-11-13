import React from 'react'
import Empty from '../components/Empty';
import { useContext } from 'react'
import BookContext from '../context/BookContext';
import BookCard from "../components/BookCard"

const BookList = () => {

    const { bookData } = useContext(BookContext);

    return (
        <div className="container">
        <div className="row">
            {
                bookData.length === 0 
                    ? <Empty/> 
                    : bookData.map((book,idx) => {
                        return <BookCard book = {book} key={idx}/>
                    })
            }
        </div>
        </div>
    )
}

export default BookList
