// import {Select} from '../style/hidenList.styled'
import {useState} from "react"
import {useSelector} from 'react-redux'
import { selectFinishDate } from '../../../redux/training/selectors';

export const AddPages = () => {
    const [dateValue, setDateValue] = useState('')
    const [pages, setPages] = useState('')
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(state => state.traning.startDate)

    const handleStartDateChange = (e) => {
      const chosenDate = Date.parse(e.target.value)/1000
      if (chosenDate >= timeOfTheStart && chosenDate <= timeOfTheFinish){
        setDateValue(e.target.value)
      }
    };

    const handleInputChange = (e) => {
        setPages(e.target.value)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
         console.log(dateValue, pages)
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