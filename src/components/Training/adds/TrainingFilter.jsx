import { useDispatch } from "react-redux";
import { updateFinishDate, updateStartDate } from "../../../redux/traning/operation";

export const TrainingFilter = () => {
  const dispatch = useDispatch();

  const handleStartDateChange = (e) => {
    dispatch(updateStartDate({ startDate: e.target.value }));
  };

  const handleFinishDateChange = (e) => {
    dispatch(updateFinishDate({ finishDate: e.target.value }))
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
        <select>Обрати книги з бібліотеки</select>
        <button>Додати</button>
      </div>
    </div>
  );
};
