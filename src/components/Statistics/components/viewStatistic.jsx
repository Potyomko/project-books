import {useSelector} from 'react-redux'
import { selectChekout } from '../../../redux/traning/selectors'

export const ViewStatistic = () => {
    const checkout = useSelector(selectChekout)
    const arrayForSort = [...checkout]

    arrayForSort.sort(function(a, b) {
        // Преобразуем в число для сравнения
        return Number.parseInt(b.unix) - Number.parseInt(a.unix);
      });

      console.log(arrayForSort)
    return <>
    <h5>Statistic</h5>
    <ul>
        {arrayForSort.map((chek)=>{
            return <li>
                <p>{chek.date}</p>
                <p>{chek.time}</p>
                <p>{chek.pages} pages</p>
            </li>
        })}
    </ul>
    </>
}