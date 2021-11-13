import React, {useState} from 'react'
import { useContext } from 'react'
import BookContext from '../context/BookContext';

const Search = () => {

    const { setSearched , setBookData } = useContext(BookContext);

    const [keyword, setKeyword] = useState("")


    const onSubmit = (e) => {
        e.preventDefault(e);
        if(keyword){
        setSearched(keyword)
        } else{
            setSearched("")
            setBookData([])
        }
    }
    const onChange = (e) => {
        setKeyword(e.target.value)
    }



    return (
        <form onSubmit={onSubmit} className="w-50">
        <div className="d-flex flex-row justify-content-center mt-3">
          
            <input type="text" value={keyword} className="form-control w-50 rounded-pill" placeholder="Search Book" onChange={onChange}  />
          <div className="input-group-append">
           
          </div>
          
          
        </div></form>
    )
}

export default Search
