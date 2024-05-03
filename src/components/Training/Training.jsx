import { Container } from "components/GlobalStyle"
import { WantToRead } from "./adds/WantToRead"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/library/operation";

export const Training = ()=>{
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, [dispatch]);

    const isLoadings = useSelector(state => state.books.isLoading);
    return (
        <Container>
            <div>
                <h1>Моє Тренування</h1>
                
        {isLoadings ? (
            
            <p>Loading...</p>
          ) : (
            <>
               <TrainingFilter />
            </>
          )}
               
                <button>Почати тренування</button>
            </div>
            <div>
                <WantToRead/>
            </div>
        </Container>
    )
}