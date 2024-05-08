import moment from "moment";
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
        const now = new Date();
        const start = Date.parse(now)/1000
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(start), 'days')
        // console.log(daysLeft)
    } else if (timeOfTheFinish && timeOfTheStart){
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(timeOfTheStart), 'days')
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