import { TimeTofinish } from "./components/finishOfTreaningTimer";
import { NewYearTimer } from "./components/timerToNewYear";
import {Chart} from "./components/chart"

import { AddPages } from "./components/addPages"
import { ViewStatistic } from "./components/viewStatistic"
import { MyGoal } from "./components/myGoal";
import { BooksList } from "./components/booksList";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/selectors";
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
        <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <> <TimeTofinish/>
        <NewYearTimer/>
        <Chart/>
        <AddPages/>
        <ViewStatistic/>
        <MyGoal/>
        <BooksList/>
        </>}
        
        </>
    )
}