// import {Select} from '../style/hidenList.styled'
import {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
// selectStartDate
import { selectFinishDate } from '../../../redux/traning/selectors';
import { addNewChekout } from "../../../redux/traning/operation";

export const AddPages = () => {
  const dispatch = useDispatch()
    const [dateValue, setDateValue] = useState('')
    const [pages, setPages] = useState('')
    const timeOfTheFinish = useSelector(selectFinishDate)
    // export const selectStartDate = state => state.traning.startDate;
    const timeOfTheStart = useSelector(state => state.traning.startDate)
    const refactedFinish = Date.parse(timeOfTheFinish)/1000
    const refactedStart = Date.parse(timeOfTheStart)/1000

    const handleStartDateChange = (e) => {
      const chosenDate = Date.parse(e.target.value)/1000
      if (chosenDate >= refactedStart && chosenDate <= refactedFinish){
        setDateValue(e.target.value)
      }
    };

    const handleInputChange = (e) => {
        setPages(e.target.value)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const unixDate = Date.parse(dateValue)/1000
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        dispatch(addNewChekout({date: dateValue, time: `${hours}:${minutes}:${seconds}`, pages, unix: unixDate}))
         console.log(`${hours}:${minutes}:${seconds}`)
         
    }
    return <form onSubmit={handleFormSubmit}>
      <input
          value={dateValue}
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
        <input 
        value={pages}
        type="number"
        // placeholder="Початок"
        onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
    
  </form>
}