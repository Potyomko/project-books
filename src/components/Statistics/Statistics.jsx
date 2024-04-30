import { TimeTofinish } from "./components/finishOfTreaningTimer";
import { NewYearTimer } from "./components/timerToNewYear";
import {Chart} from "./components/chart"

import { AddPages } from "./components/addPages"
import { ViewStatistic } from "./components/viewStatistic"
import { MyGoal } from "./components/myGoal";
import { BooksList } from "./components/booksList";

export const Statistics = ()=>{
    return(
        <>
         <TimeTofinish/>
        <NewYearTimer/>
        <Chart/>
        <AddPages/>
        <ViewStatistic/>
        <MyGoal/>
        <BooksList/>
        </>
    )
}