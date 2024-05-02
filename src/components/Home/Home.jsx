import { BookForm } from "components/AddBook/BookForm"
import { Header } from "../Header/Header"
import { BookList } from "components/AddBook/BookList"
import { useEffect } from "react"
import { fetchBooks } from "../../redux/library/operation"
import { useDispatch } from "react-redux"


export const Home = ()=>{

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks());
        }, [dispatch]);
    return(
        <>
         <BookForm/>
         <BookList/>  
        </>
        
    )
}