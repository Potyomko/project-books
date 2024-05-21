import { BookForm } from "components/AddBook/BookForm"
import { Header } from "../Header/Header"
import { BookList } from "components/AddBook/BookList"
import { useEffect, useState } from "react"
import { fetchBooks } from "../../redux/library/operation"
import { useDispatch, useSelector } from "react-redux"
import { MegaContainer } from "components/AddBook/Styled/StyledList.styled"
import { checkWindowSize } from "../../redux/training/operation";
import { selectSize} from "../../redux/training/selectors";
import { MobileBooksList } from "components/AddBook/mobileBookList";
import { ModallAddBtn } from "components/AddBook/Styled/StyledList.styled"
import { MobileBookForm } from "components/AddBook/mobileBookForm"


export const Home = () => {
    const dispatch = useDispatch();
    const size = useSelector(selectSize)
    const[ modalTreaker, setModalTreaker] = useState(false)
  
    useEffect(() => {
      dispatch(fetchBooks());

      const resizeing = () => {
        if(window.innerWidth !== size)
        dispatch(checkWindowSize(window.innerWidth))
    }

    dispatch(checkWindowSize(window.innerWidth))
    setInterval(resizeing, 1000)
    }, [dispatch, size]);

    const delince = () => {
      setModalTreaker(false)
  }
    const isLoadings = useSelector(state => state.books.isLoading);
    return (
      <MegaContainer>
        {modalTreaker && <MobileBookForm delince={delince}/>}
 
      {!modalTreaker && <>
        {isLoadings ? (
            
          <p>Loading...</p>
        ) : (
          <>
          {size <= 320 && <>
          <MobileBooksList/>
          <ModallAddBtn onClick={()=>setModalTreaker(true)}>+</ModallAddBtn></>}
            {size > 320 && <> <BookForm />
            <BookList /></>}
          </>
        )}
        </>}
      </MegaContainer>
    );
  };