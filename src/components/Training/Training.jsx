import { Container } from "components/GlobalStyle"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/library/operation";
import { StartingTraining, fetchBooksSelected, fetchTrainingOBJ } from "../../redux/training/operation";
import { MyGoal } from "components/Statistics/components/myGoal";
import { Chart } from "chart.js";
import { BtnTrain, MyTrainingDiv, MyTrainingText } from "./styles/Trainingstyle.styled";


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
        <div>
          {/* <Chart/> */}
        </div>
            <div>
                <MyGoal/>
            </div>
        </Container>
    )
}