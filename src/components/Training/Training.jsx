import { Container } from "components/GlobalStyle"
import { WantToRead } from "./adds/WantToRead"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/library/operation";
import { StartingTraining, fetchBooksSelected, fetchTrainingOBJ } from "../../redux/training/operation";


export const Training = ()=>{
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(fetchBooks());
    dispatch(fetchBooksSelected())

    }, [dispatch]);
    
    
    const handleStartingTraining = () => {
        dispatch(StartingTraining())
      };

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
               
                <button onClick={handleStartingTraining}>Почати тренування</button>
            </div>
            <div>
                <WantToRead/>
            </div>
        </Container>
    )
}