import { selectSelectedBooks, selectIsStarted, selectFinishDate, selectStartDate  } from "../../../redux/training/selectors";
import {useSelector } from "react-redux";

   export const MyGoal = () => {
    const isStarted = useSelector(selectIsStarted)
    const selectedBooks = useSelector(selectSelectedBooks);
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)

    let daysLeft = 0

    const booksLeft = selectedBooks.filter((book)=> {
        return book.status === "reading"
    })

    if (timeOfTheFinish && timeOfTheStart && isStarted){
        const oneDay = 1000*60*60*24
        const now = new Date();
        const unix = Date.parse(now)/1000
        const res = timeOfTheFinish - unix 
        // const res = timeOfTheFinish - unix
        // console.log(timeOfTheFinish);
        daysLeft = Math.round(res/oneDay)
    } else if (timeOfTheFinish && timeOfTheStart){
        const calc = timeOfTheFinish - timeOfTheStart
        daysLeft = Math.round(calc/60000)
    }

    return <div>
        <h3>Моя мета прочитати</h3>
        <ul>
            <li>
                <p>{selectedBooks.length}</p>
                <p>Кількість книжок</p>
            </li>
            <li>
                 <p>{daysLeft}</p>
                <p>Кількість днів</p>
            </li>
            {isStarted &&  <li>
                <p>{booksLeft.length}</p>
                <p>Залишилось книжок</p>
            </li>}
           
        </ul>
    </div>
}