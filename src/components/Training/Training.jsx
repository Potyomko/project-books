import { Container } from "components/GlobalStyle"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/library/operation";
import { StartingTraining, fetchBooksSelected, fetchTrainingOBJ } from "../../redux/training/operation";
// import { Chart } from "chart.js";
import { BtnTrain, BigContainer, DivTrainingDivs, DivWhatToRead,MegaContainer, GoalContainer, MediumContainer, MyTrainingDiv, MyTrainingText, MainCountainer } from "./styles/Trainingstyle.styled";
import { GoalTraining } from "./adds/myGoalTraining";
import { Chart } from "../Statistics/components/chart";


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
 <MegaContainer>
  
        <MainCountainer>
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
        </MainCountainer>
          
              <GoalContainer>
                <GoalTraining/>
                </GoalContainer>
       
        
        <BigContainer>
          <Chart/>
        </BigContainer>
        
        </MegaContainer>
       
    )
}