import moment from "moment";
import { selectSelectedBooks, selectIsStarted, selectFinishDate, selectStartDate  } from "../../../redux/training/selectors";
import {useSelector, useDispatch } from "react-redux";
import { ContainerMyGoal, ExitBtn } from "../style/myGoal.styled";
import { GoalList,GoalItem, GoalP, GoalText, GoalTextDiv, GoalTextP, GoalTextPDiv, MyGoalColor, MyGoalContainer } from "../style/myGoal.styled";
import { andOfTraining } from "../../../redux/training/operation"
import { selectTrainingId } from "../../../redux/training/selectors"

   export const MyGoal = () => {
    const isStarted = useSelector(selectIsStarted)
    const selectedBooks = useSelector(selectSelectedBooks);
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)

    const dispatch = useDispatch()
    const trId = useSelector(selectTrainingId);

    const handlerOnClick = () => {
        dispatch(andOfTraining(trId))
    }

    let daysLeft = 0

    const booksLeft = selectedBooks.filter((book)=> {
        return book.status === "reading"
    })

    if (timeOfTheFinish && timeOfTheStart && isStarted){
        const now = new Date();
        const start = Date.parse(now)/1000
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(start), 'days')
        // console.log(daysLeft)
    } else if (timeOfTheFinish && timeOfTheStart){
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(timeOfTheStart), 'days')
    }

    return <MyGoalContainer>
           <GoalTextDiv>
              <GoalText>Моя мета прочитати</GoalText> 
           </GoalTextDiv>
         
        <GoalList>
               <GoalItem>
                  <GoalTextPDiv>
                       <GoalP>{selectedBooks.length}</GoalP>
                       </GoalTextPDiv>
                <GoalTextP>Кількість книжок</GoalTextP>
            </GoalItem>
               <GoalItem>
                   <GoalTextPDiv>
                       <GoalP>{daysLeft}</GoalP>
                       </GoalTextPDiv>
                <GoalTextP>Кількість днів</GoalTextP>
            </GoalItem>
            <GoalItem>
            <GoalTextPDiv>
                <GoalP>{booksLeft.length}</GoalP>
                </GoalTextPDiv>
                <GoalTextP>Залишилось книжок</GoalTextP>
            </GoalItem>
               </GoalList>

               <ExitBtn  to='/training' onClick={handlerOnClick}>Завчасно закінчити тренування</ExitBtn>
              
    </MyGoalContainer>
}