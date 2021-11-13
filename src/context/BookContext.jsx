import { createContext , useState , useEffect} from "react";
import axios from "axios"

const BookContext = createContext();


export const BookProvider = ({children}) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const [searched, setSearched] = useState("")
    const [bookData, setBookData] = useState([])



    useEffect(()=>{
  
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searched}&maxResults=30&printType=books&key=${apiKey}`).then((res)=>{
                setBookData(res.data.items)
            }).catch((err)=>{

                console.log(err)
            })
           
        
    },[searched, apiKey])
    
    
    const values = {
        
        searched,
        setSearched,
        bookData,
        setBookData
    }
    return (
        <BookContext.Provider value={values}>{children}</BookContext.Provider>
    )
}


export default BookContext;