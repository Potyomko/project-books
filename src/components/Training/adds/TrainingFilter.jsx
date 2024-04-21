import { useDispatch, useSelector } from "react-redux";
import { updateFinishDate, updateStartDate } from "../../../redux/training/operation";
import { selectBooks } from "../../../redux/training/selectors";

export const TrainingFilter = () => {
const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleStartDateChange = (e) => {
    dispatch(updateStartDate(e.target.value));
  };

  const handleFinishDateChange = (e) => {
    dispatch(updateFinishDate(e.target.value));
  };

  return (
    <div>
      <div>
        <input
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          placeholder="Закінчення"
          onChange={handleFinishDateChange}
        />
      </div>
      <div>
        <select>
          {books.map(book => (
            <option key={book.id} value={book.id}>{book.title}</option>
          ))}
        </select>
        <button>Додати</button>
      </div>
    </div>
  );
};
