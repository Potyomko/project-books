import { Container } from "components/GlobalStyle"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/library/operation";
import { StartingTraining, fetchBooksSelected, fetchTrainingOBJ } from "../../redux/training/operation";
import { Chart } from "chart.js";
import { BtnTrain, DivTrainingDivs, DivWhatToRead, MyTrainingDiv, MyTrainingText } from "./styles/Trainingstyle.styled";
import { GoalTraining } from "./adds/myGoalTraining";


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
        <DivTrainingDivs>
        <div>
          <MyTrainingDiv>
            <MyTrainingText>Моє Тренування</MyTrainingText>
          </MyTrainingDiv>
        {isLoadings ? (
            
            <p>Loading...</p>
          ) : (
            <>
               <TrainingFilter />
            </>
          )}
               
                <BtnTrain onClick={handleStartingTraining}>Почати тренування</BtnTrain>
        </div>
            <DivWhatToRead>
                <GoalTraining/>
          </DivWhatToRead>
        </DivTrainingDivs>
        <div>
          {/* <Chart/> */}
        </div>
        </Container>
    )
}