import { selectFinishDate, selectStartDate, selectTrainingId } from '../../../redux/training/selectors';
import {useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addNewChekout } from "../../../redux/training/operation";

export const AddPages = () => {
  const trId = useSelector(selectTrainingId);
  const dispatch = useDispatch()
    const [dateValue, setDateValue] = useState('')
    const [pages, setPages] = useState('')
    const timeOfTheFinish = useSelector(selectFinishDate)
    // export const selectStartDate = state => state.traning.startDate;
    const timeOfTheStart = useSelector(selectStartDate)
    // const refactedFinish = Date.parse(timeOfTheFinish)/1000
    // const refactedStart = Date.parse(timeOfTheStart)/1000

    const handleStartDateChange = (e) => {
      const chosenDate = Date.parse(e.target.value)/1000
      // if (chosenDate >= timeOfTheStart && chosenDate <= timeOfTheFinish){
        setDateValue(e.target.value)
      // }
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
        const checkoutData = {date: dateValue, time: `${hours}:${minutes}:${seconds}`, pages, unix: unixDate}
        dispatch(addNewChekout({checkoutData, trId}))
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