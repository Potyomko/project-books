import { BookForm } from "components/AddBook/BookForm"
import { Header } from "../Header/Header"
import { BookList } from "components/AddBook/BookList"
import { useEffect } from "react"
import { fetchBooks } from "../../redux/library/operation"
import { useDispatch, useSelector } from "react-redux"


export const Home = () => {
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, [dispatch]);

    const isLoadings = useSelector(state => state.books.isLoading);
  console.log(isLoadings);
    return (
      <>

        {isLoadings ? (
            
          <p>Loading...</p>
        ) : (
          <>
            <BookForm />
            <BookList />
          </>
        )}
      </>
    );
  };