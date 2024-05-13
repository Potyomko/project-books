import { TimeTofinish } from "./components/finishOfTreaningTimer";
import { NewYearTimer } from "./components/timerToNewYear";
import {Chart} from "./components/chart"

import { AddPages } from "./components/addPages"
import { ViewStatistic } from "./components/viewStatistic"
import { MyGoal } from "./components/myGoal";
import { BooksList } from "./components/booksList";
import { useDispatch, useSelector } from "react-redux";
import { BigContainer, SmallContainer, TimersContainer, MegaContainer, MediumContainer } from "./style/statistic.styled";
import { useEffect } from "react";
import { getTreaningData } from "../../redux/training/operation";
import { selectIsLoading } from "../../redux/training/selectors";

export const Statistics = ()=>{
    // const userId = useSelector(selectUserId)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTreaningData())
    }, [dispatch])

    return(
        <MegaContainer>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <>
        <BigContainer>
         <MediumContainer>
        <TimersContainer>
        <TimeTofinish/>
        <NewYearTimer/>
        </TimersContainer> 
        <BooksList/>
        </MediumContainer>
        <MyGoal/>
        </BigContainer>
      
        <BigContainer>
        <Chart/>
        <SmallContainer>
        <AddPages/>
        <ViewStatistic/>
        </SmallContainer>
        </BigContainer>
        
        
        </>}
        
        </MegaContainer>
    )
}